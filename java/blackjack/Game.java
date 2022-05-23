package blackjack;

import java.util.Scanner;

public class Game {
  protected static Deck deck;
  protected Scanner sc = new Scanner(System.in);

  public Game() {
    deck = new Deck();
  }

  public Game(int decks) {
    deck = new Deck(decks);
  }

  // Play a whole game
  public void run(Player[] players) {
    String action = "Y";


    // While the player wants to continue
    for (int i = 0; action.charAt(0) != 'N' && action.charAt(0) != 'n'; i++) {
      players[i % players.length].playHand(deck);

      System.out.println();
      System.out.print("Continue (Y/N): ");
      action = this.sc.nextLine();
      System.out.println("----------------------------------------");
    }
  }
}
