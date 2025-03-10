import { sql } from "../config/db.js";

// get all products

export const getProducts = (req, res) => {
  try {
    const products = sql`SELECT * FROM products
        order by createdat DESC`;
    console.log("data fetched successfully");
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error(err);
  }
};
// get single product

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await sql`select * from products where id=${id}`;
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.log(err);
  }
};

//create product

export const createProduct = async (req, res) => {
  try {
    const { name, image, price } = req.body;
    if (!name || !image || !price) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }
    const product =
      await sql`insert into products (name, image, price) values (${name}, ${image}, ${price}) returning *`;
    res.status(200).json({ success: true, data: product[0] });
  } catch (err) {
    console.log(err);
  }
};
//update product

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price } = req.body;
    const product = await sql`update products set name=${name}, image=${image}, price=${price} where id=${id} returning *`;
    res.status(200).json({ success: true, data: product[0] });
  } catch (err) {
    console.log(err);
  }
};
// delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await sql`delete from products where id=${id} returning *`;
    res.status(200).json({ success: true, data: product[0] });
  } catch (err) {
    console.log(err);
  }
};