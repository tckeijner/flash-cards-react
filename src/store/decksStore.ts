import {create} from "zustand/react";

export interface Card {
  front: string;
  back: string;
}

export interface Deck {
  _id: string;
  name: string;
  cards: Card[];
}

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