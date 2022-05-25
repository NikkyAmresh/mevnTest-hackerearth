const db = require("../models");
const Post = db.posts;
const { handledError } = require("./../helpers/AppError");
const postServices = require("./../services/post.service");

exports.create = async (req, res) => {
  try {
    const post = await postServices.create(req.body);
    res.send(post);
  } catch (err) {
    handledError(err, res);
  }
};

exports.findAll = async (req, res) => {
  try {
    const posts = await postServices.getAll(req.query.title);
    res.send(posts);
  } catch (err) {
    handledError(err, res);
  }
};

exports.findOne = async (req, res) => {
  try {
    const post = await postServices.get(req.params.id);
    res.send(post);
  } catch (err) {
    handledError(err, res);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await postServices.update(req.params.id, req.body);
    res.send(updated);
  } catch (err) {
    handledError(err, res);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await postServices.delete(req.params.id);
    res.send(deleted);
  } catch (err) {
    handledError(err, res);
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const deleted = await postServices.deleteAll();
    res.send(deleted);
  } catch (err) {
    handledError(err, res);
  }
};
