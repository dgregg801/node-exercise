import express from "express";
import userRouter from "./users.route";
import productsRouter from "./products.route";


const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);

router.get("/test", (req, res) => {
  res.send("working");
});



export default router;
