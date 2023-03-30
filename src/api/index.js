import express from "express";
import morgan from "morgan";
import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan("dev"));

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

server.post("/payment", (req, res) => {
  const prod = req.body;
  console.log(prod);
  let preference = {
    items: [
      {
        id: prod.id,
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

server.get("/testing", (req, res) => {
  res.send("<h1>hola</h1>");
});

server.listen(3001, () => {
  console.log(`Server Listening on port ${3001}`);
});
