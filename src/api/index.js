import express from "express";
import morgan from "morgan";
import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

server.post("/payment", (req, res) => {
  const prod = req.body;
  let preference = {
    items: [
      {
        id: 123,
        title: prod.title,
        currency_id: "ARS",
        picture_url: prod.image,
        description: prod.description,
        quantity: 1,
        unit_price: prod.price,
      },
    ],
    back_urls: {
      success: "http://localhost:5173/HomePage",
      failed: "",
      prending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});

server.listen(3001, () => {
  console.log(`Server Listening on port ${3001}`);
});
