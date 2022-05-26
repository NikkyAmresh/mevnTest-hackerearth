const db = require("../models");
const postModel = db.posts;
const { AppError } = require("../helpers/AppError");
const PostServices = {
  create: async (postData) => {
    /* create a post using the postData  which contain {title,description,published}
    where title is mandatory otherwise throw an 400 AppError as "Content can not be empty!"*/

    let post;

    /* for other kinds of error throw 500 AppError as message "Some error occurred while creating the Post." */

    return post;
  },
  getAll: async (title) => {
    /* get all posts from database and return  */
    // add filter to search wi if title is not empty
    /* for error throw 500 AppError as message "Some error occurred while retrieving posts." */
    let posts;
    return posts;
  },
  get: async (id) => {
    /* get the post from the database with id */
    /* if any error occurred while  retriving the post Throw AppError 500 as  "Error retrieving Post with id=" + id  */
    /* throw AppError 404 if post not fonud as message "Not found Post with id " + id*/
    /* else return as {message :"Post was deleted successfully!"} */

    return post;
  },
  update: async (id, post) => {
    /* update post with id {title,description,published} */
    /* if variable post is null throw AppError 400 as "Data to update can not be empty!" */
    /* if error while updating post then throw AppError 500 as "Error updating Post with id=" + id */
    /* if post not found throw AppError 404 "Cannot update Post with id=${id}. Maybe Post was not found!"*/
    /*
    else return { message: "Post was updated successfully." };
    /*
  },
  delete: async (id) => {
    /* delet the post from the database with id */
    /* if any error occurred while  deleting the post Throw AppError 500 as  "Could not delete Post with id=" + id  */
    /* else return as {message :"Post was deleted successfully!"} */
  },
  deleteAll: async () => {
    /* delete all posts from  the database and return as "${deleted.deletedCount} Posts were deleted successfully!" */

    /* for any kind of error, throw AppError 500 as message "Some error occurred while removing all posts." */

    return {
      message: `${deleted.deletedCount} Posts were deleted successfully!`,
    };
  },
};

module.exports = PostServices;
