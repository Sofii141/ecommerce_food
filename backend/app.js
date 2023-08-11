import express from "express";
import cors from "cors";
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import morgan from "morgan";
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"))
app.use(cors());

app.use(userRoutes);
app.use(productRoutes);

export default app;

