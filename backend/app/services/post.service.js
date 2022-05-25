const db = require("../models");
const postModel = db.posts;
const { AppError } = require("../helpers/AppError");
const PostServices = {
  create: async (postData) => {
    if (!postData.title) {
      throw new AppError(400, "Content can not be empty!");
    }
    const post = new postModel({
      title: postData.title,
      description: postData.description,
      published: postData.published ? postData.published : false,
    });

    await post.save().catch((err) => {
      throw new AppError(
        500,
        err.message || "Some error occurred while creating the Post."
      );
    });
    return post;
  },
  getAll: async (title) => {
    let condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};

    const posts = await postModel.find(condition).catch((err) => {
      throw new AppError(
        500,
        err.message || "Some error occurred while retrieving posts."
      );
    });
    return posts;
  },
  get: async (id) => {
    const post = await postModel.findById(id).catch((err) => {
      throw new AppError(
        500,
        err.message || "Error retrieving Post with id=" + id
      );
    });
    if (!post) {
      throw new AppError(404, "Not found Post with id " + id);
    }
    return post;
  },
  update: async (id, post) => {
    if (!post) {
      throw new AppError(400, "Data to update can not be empty!");
    }

    const updated = await postModel
      .findByIdAndUpdate(id, post, { useFindAndModify: false })
      .catch((err) => {
        throw new AppError(
          500,
          err.message || "Error updating Post with id=" + id
        );
      });

    if (!updated) {
      throw new AppError(
        404,
        `Cannot update Post with id=${id}. Maybe Post was not found!`
      );
    } else return { message: "Post was updated successfully." };
  },
  delete: async (id) => {
    const deleted = await postModel
      .findByIdAndRemove(id, { useFindAndModify: false })

      .catch((err) => {
        throw new AppError(
          500,
          err.message || "Could not delete Post with id=" + id
        );
      });

    if (!deleted) {
      throw new AppError(
        404,
        `Cannot delete Post with id=${id}. Maybe Post was not found!`
      );
    } else {
      return {
        message: "Post was deleted successfully!",
      };
    }
  },
  deleteAll: async () => {
    const deleted = await postModel.deleteMany({}).catch((err) => {
      throw new AppError(
        500,
        err.message || "Some error occurred while removing all posts."
      );
    });

    return {
      message: `${deleted.deletedCount} Posts were deleted successfully!`,
    };
  },
};

module.exports = PostServices;
