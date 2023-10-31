import query from "../config/connection";

async function getOne(id) {
    return query("SELECT * FROM products WHERE productID = ?", [id]);
}

async function getAll() {
    return query("SELECT * FROM products");
}

async function addProduct(newProductInfo) {
    return query("INSERT INTO products SET ?", [newProductInfo]);
}

async function updateProduct(id, updatedProductInfo) {
    return query("UPDATE products SET ? WHERE productID = ?", [updatedProductInfo, id]);
}

async function deleteProduct(id) {
    return query("DELETE FROM products WHERE productID = ?", [id]);
}

export default {
    getOne, 
    getAll, 
    addProduct, 
    updateProduct, 
    deleteProduct
}