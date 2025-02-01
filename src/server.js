require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors({ origin: "https://frontend-eta-eight-48.vercel.app" }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("Connected to MongoDB") })
  .catch((error) => { console.log("Error connecting to MongoDB", error) });

app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
