import express from "express";
import db from "../mockdb";

//Creating a sub route for our server to use
const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;

    let data;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = req.body;
    //We should check that newUser is an object
    //that aligns with the data we want, not just
    //any old object with any information
    const data = await db.add(newUser);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    //Need the id so we know which resource to update
    const { id } = req.params;
    //Need the req.body to know what to update
    //resource to be
    const updatedUser = req.body;
    //Actually updates the resource, and returns
    //data about how that process went
    const data = await db.update(id, updatedUser);
    //Informing the requestor about how it went
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await db.remove(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
