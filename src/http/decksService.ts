import {Deck} from "../store/decksStore.ts";
import {httpClient} from "./httpClient.ts";

export const fetchDecks = async (): Promise<Deck[]> => {
  const {data} = await httpClient.get<Deck[]>("/decks");
  return data;
};

export const deleteDeck = async (id: string): Promise<Deck[]> => {
  const {data} = await httpClient.delete<Deck[]>("/decks/" + id);
  return data;
};