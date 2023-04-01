import express from "express";
import morgan from "morgan";
import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan("dev"));

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5173/HomePage",
  "http://127.0.0.1:5173",
  "http://localhost:3001/feedback",
  "http://localhost:3001/payment",
  "https://shopping-cart-black-beta.vercel.app",
  "https://shopping-cart-black-beta.vercel.app/HomePage",
  "https://shopping-cart-black-beta.vercel.app/Product",
  "https://shopping-cart-git-feature-mercadolibre-api-federico-villace.vercel.app/HomePage",
  "https://shopping-cart-git-feature-mercadolibre-api-federico-villace.vercel.app",
  "https://shopping-cart-git-feature-mercadolibre-api-federico-villace.vercel.app/Product",
];

server.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log(origin);
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.post("/payment", (req, res) => {
  const prod = req.body;
  console.log(prod);

  let preference = {
    external_reference: "vulcano.44@hotmail.com",
    items: prod,
    payer: {
      name: "Lalo",
      surname: "Landa",
      email: "test_user_36961754@testuser.com",
      phone: {
        area_code: "11",
        number: 44444444,
      },
      identification: {
        type: "DNI",
        number: "40677577",
      },
      address: {
        street_name: "Calle Falsa",
        street_number: 123,
        zip_code: "1414",
      },
    },
    back_urls: {
      success: "http://localhost:5173/AfterPurchase",
      failure: "http://localhost:5173/HomePage",
      pending: "http://localhost:5173/HomePage",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "visa",
        },
      ],
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
      installments: 6,
    },
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});

server.get("/feedback", function (req, res) {
  console.log(req.query);
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

server.listen(3001, () => {
  console.log(`Server Listening on port ${3001}`);
});
