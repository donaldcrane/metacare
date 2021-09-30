import { Router } from "express";
import CommentController from "../controllers/comment";
import MovieController from "../controllers/movie";

const router = Router();
const { addComment, getCommentById, getComments } = CommentController;
const { getMovies, fetchCharacter } = MovieController;

router.get("/movies", getMovies);
router.get("/character", fetchCharacter);

router.get("/comment/comments", getComments);
router.get("/comment/comment:id", getCommentById);
router.post("/comment/:movieId", addComment);

export default router;
