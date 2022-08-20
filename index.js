const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.pfj53wk.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect;

    //All product collection here
    const productCollection = client
      .db("product-collection")
      .collection("allProduct");

    //All product collection here
    const reviewCollection = client.db("All-Reviews").collection("reviews");

    //
  } finally {
    // await client.close();
  }
}
run().catch(console.dir()); // Call Function

app.get("/", (req, res) => {
  res.send("server ready");
});

app.listen(port, () => {
  console.log(`server connected port on ${port}`);
});
