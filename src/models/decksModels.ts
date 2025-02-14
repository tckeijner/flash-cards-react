export interface DeckCard {
  front: string;
  back: string;
}

export interface Deck {
  _id: string;
  name: string;
  cards: DeckCard[];
}