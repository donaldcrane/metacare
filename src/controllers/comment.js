import dotenv from "dotenv";
import axios from "axios";
import database from "../models";
import commentValidation from "../validation/comment";

dotenv.config();

/**
 * @class UserController
 * @description create, verify and log in user
 * @exports UserController
 */
export default class CommentController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addComment(req, res) {
    try {
      const { movieId } = req.params;
      const { comment } = req.body;
      const { error } = commentValidation({ comment });
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const movie = await axios.get(`https://swapi.dev/api/films/${movieId}`);
      if (!movie) return res.status(404).json({ status: 404, error: "Sorry Star wars movie does not exist." });
      const newComment = { movieId, comment, commenterIp: req.ip };
      const createdComment = await database.Comments.create(newComment);
      return res.status(201).json({
        status: 201,
        message: "Comment added Successfully.",
        createdComment
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getComments(req, res) {
    try {
      const comments = await database.Comments.findAll({
        order: [
          ["createdAt", "Desc"]
        ]
      });
      return res.status(200).json({ status: 200, message: "Successfully retrived all Comments", data: comments });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Resource not found." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getCommentById(req, res) {
    try {
      const { commentId } = req.params;
      const comment = await database.Comments.findOne({
        where: { id: commentId }
      });
      return res.status(200).json({ status: 200, message: "Successfully retrived all Comments", data: comment });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Resource not found." });
    }
  }
}
