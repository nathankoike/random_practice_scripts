package blackjack;

import java.util.LinkedList;
import java.util.Random;

public class Deck {
  protected Random rand = new Random();
  protected int copies = 1
  public static List<String> cards = new LinkedList<String>();

  // Build one deck
  protected static void buildDeck() {
    for (char suit : "SCDH") {
      for (
        String value :
        {"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"})
          this.cards.add(value + suit)
    }
  }

  // Reset the deck to its initial state
  public static void resetDeck() {
    this.cards.clear();

    for (int i = 0; i < this.copies; i++) this.buildDeck();
  }

  // Combine as many decks as desired
  public Deck(int copies = null) {
    // If a custom number of copies is provided, assign it
    if (copies) this.copies = copies;

    // Build the deck
    this.resetDeck();
  }

  // Draw a random card from the deck
  public static String draw() {
    return this.cards.remove(this.rand.nextInt(this.cards.size()));
  }

  // Is the deck empty?
  public static bool empty() {
    return this.cards.size() > 0;
  }
}
