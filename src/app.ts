import express from "express";
import userRoutes from "./modules/user/user.routes";
import pokemonRoutes from "./modules/pokemon/pokemon.routes";
import { errorHandler } from "./middleware/error.middleware";
import { authMiddleware } from "./middleware/auth.middleware";

const app = express();

app.use(express.json());
app.use("/api/users", authMiddleware, userRoutes);
app.use("/api/pokemon", authMiddleware, pokemonRoutes);
app.use(errorHandler);



export default app;