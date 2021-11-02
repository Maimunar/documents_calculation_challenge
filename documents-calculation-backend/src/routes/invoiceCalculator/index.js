import express from "express";
import { calculateInvoice } from "../../controllers/invoiceCalculator";
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

module.exports = () => {
  router.post("/", upload.single("csvFile"), calculateInvoice);

  return router;
};
