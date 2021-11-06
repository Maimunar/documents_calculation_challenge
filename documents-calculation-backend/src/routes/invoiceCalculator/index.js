import express from "express";
import { calculateInvoice } from "../../controllers/invoiceCalculator";
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//? You don't need to export a function here. And if you prefer to do it dont do an inline export function. Define the function at the top and then export the named function
module.exports = () => {
  router.post("/", upload.single("csvFile"), calculateInvoice);

  return router;
};
