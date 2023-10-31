import express from "express";
import userRouter from "./users.route";


const router = express.Router();

router.use("/users", userRouter);

router.get("/test", (req, res) => {
  res.send("working");
});



export default router;
