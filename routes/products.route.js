import productsController from "../controllers/products.controller";
import express from "express";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;

        let data;
        if(id) {
            data = await productsController.getOne(id);
        } else {
            data = await productsController.getAll();
        }

        res.json(data);
    } catch(err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newProduct = req.body;
        //Validate the information on this newProduct object before inserting into the database
        const data = await productsController.addProduct(newProduct);
        res.json(data);
    } catch(err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedProduct = req.body;
        const data = productsController.updateProduct(id, updatedProduct);
        res.json(data);
    } catch(err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await productsController.deleteProduct(id);
        res.json(data);
    } catch(err) {
        next(err);
    }
});

export default router;