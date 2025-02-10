import {create} from "zustand/react";
import {Deck} from "../models/decksModels.ts";


export interface DecksStoreModel {
  decks: Deck[];
  decksError: string | null;
  setDecks: (decks: Deck[]) => void;
  setDecksError: (message: any) => void;
}

export const useDecksStore = create<DecksStoreModel>((set) => ({
  decks: [],
  decksError: null,
  setDecks: (decks: Deck[]) => set({decks}),
  setDecksError: (decksError: any) => set({decksError: decksError.toString()}),
}));