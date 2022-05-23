package blackjack;

public class Game {
  protected static Deck deck;

  public Game() {
    deck = new Deck();
  }

  public Game(int decks) {
    deck = new Deck(decks);
  }

  // Play a whole game
  public static void run(Player[] players) {
    // System.out.println(players[0]);

    players[0].playHand(deck);
  }
}
