import {Deck, DeckCard} from "../models/decksModels.ts";
import {useDecksStore} from "../store/decksStore.ts";
import {useState} from "react";
import {updateDeck} from "../http/decksService.ts";

export const useEditDeck = (deckId: string) => {
  const defaultDeck: Deck = {name: "", cards: [], _id: ""};
  const storeDeck = useDecksStore((state) => state.decks.find(({_id}) => _id === deckId)) ?? defaultDeck;
  const [deck, setDeck] = useState(storeDeck);
  const [name, setName] = useState(deck.name);
  const {setDecks, setDecksError} = useDecksStore();

  const addEmptyCardToDeck = () => {
    setDeck({...deck, cards: [...deck.cards, {front: "", back: ""}]});
  };

  const deleteCardFromDeck = (index: number) => {
    const updatedCards = deck.cards;
    updatedCards.splice(index, 1);
    setDeck({...deck, cards: updatedCards});
  };

  const updateCard = (text: string, index: number, key: keyof DeckCard) => {
    const updatedCards = [...deck.cards];
    updatedCards[index] = {...deck.cards[index], [key]: text};
    setDeck({...deck, cards: updatedCards});
  };

  const saveDeck = async () => {
    await updateDeck(deck)
      .then(setDecks)
      .catch(setDecksError);
  };

  return {
    deck,
    name,
    setName,
    addEmptyCardToDeck,
    deleteCardFromDeck,
    updateCard,
    saveDeck
  };
};