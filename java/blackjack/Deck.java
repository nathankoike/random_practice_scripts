package blackjack;

import java.util.List;
import java.util.LinkedList;
import java.util.Random;

public class Deck {
  protected static Random rand = new Random();
  protected static int copies = 1;
  public static List<String> cards = new LinkedList<String>();

  // Build one deck
  protected static void buildDeck() {
    String[] values = {
      "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
    };

    char[] suits = {'S', 'D', 'H', 'C'};

    for (char suit : suits) {
      for (String value : values) cards.add(value + suit);
    }
  }

  // Reset the deck to its initial state
  public static void resetDeck() {
    cards.clear();

    for (int i = 0; i < copies; i++) buildDeck();
  }

  public Deck() {
    // Build the deck
    resetDeck();
  }

  public Deck(int decks) {
    copies = decks;

    // Build the deck
    resetDeck();
  }

  // Is the deck empty?
  public static boolean empty() {
    return cards.size() < 1;
  }

  // Draw a random card from the deck
  public static String draw() {
    if (empty()) resetDeck();

    return cards.remove(rand.nextInt(cards.size()));
  }
}
