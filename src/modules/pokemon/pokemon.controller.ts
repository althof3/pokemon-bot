import { Request, Response } from "express";
import { formatBasic, PokemonOutboundService } from "../../outbound/pokemon/pokemon.service";

const service = new PokemonOutboundService();

export const getPokemonDetail = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const data = await service.fetchPokemon(name);
    res.status(201).json(formatBasic(data));
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

