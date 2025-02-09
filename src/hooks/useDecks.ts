import {useDecksStore} from "../store/decksStore.ts";
import {deleteDeck, fetchDecks} from "../http/decksService.ts";
import {useEffect} from "react";

/**
 * Custom hook to manage deck-related state and logic.
 * Encapsulates data fetching, error handling, and deck deletion.
 */
export const useDecks = () => {
  // Access state and state-updating functions from the decks store
  const {decks, decksError, setDecks, setDecksError} = useDecksStore();

  /**
   * Fetches the list of decks when the component using this hook mounts.
   * Updates the store with fetched decks or sets an error if the fetch fails.
   */
  useEffect(() => {
    fetchDecks()
      .then(setDecks) // Update the store with the fetched decks
      .catch(setDecksError); // Update the store with the error message if fetching fails
  }, [setDecks, setDecksError]); // Dependencies ensure this effect runs only when these functions change

  /**
   * Deletes a specific deck by its ID.
   * Updates the store with the new list of decks or sets an error if deletion fails.
   *
   * @param id - The ID of the deck to delete
   */
  const handleDelete = (id: string) => {
    deleteDeck(id)
      .then(setDecks) // Update the store with the updated list of decks after deletion
      .catch(setDecksError); // Update the store with the error message if deletion fails
  };

  /**
   * Returns the current state of decks, any error messages, and a handler for deleting decks.
   */
  return {
    decks, // The current list of decks
    decksError, // Any error encountered during fetching or deleting
    handleDelete, // Function to delete a deck by ID
  };
};
