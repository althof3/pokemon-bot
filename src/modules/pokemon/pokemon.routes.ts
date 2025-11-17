import { Router } from "express";
import { getPokemonDetail } from "./pokemon.controller";

const router = Router();

router.get("/:name", getPokemonDetail);

export default router;