const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);

routes.get("/products/show/:id", ProductController.show);

routes.post("/products/create", ProductController.create);

routes.put("/products/update/:id", ProductController.update);

routes.delete("/products/destroy/:id", ProductController.destroy);

module.exports = routes;