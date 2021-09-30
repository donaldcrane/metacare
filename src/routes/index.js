import { Router } from "express";
import swapiRoutes from "./swapiRoutes";

const router = new Router();

router.use("/", swapiRoutes);

export default router;
