import {httpClient} from "./httpClient.ts";
import {Deck} from "../models/decksModels.ts";

export const fetchDecks = async (): Promise<Deck[]> => {
  const {data} = await httpClient.get<Deck[]>("/decks");
  return data;
};

export const deleteDeck = async (id: string): Promise<Deck[]> => {
  const {data} = await httpClient.delete<Deck[]>("/decks/" + id);
  return data;
};

export const createDeck = async (deck: Partial<Deck>): Promise<Deck[]> => {
  const {data} = await httpClient.post<Deck[]>("/decks/", {deck});
  return data;
};