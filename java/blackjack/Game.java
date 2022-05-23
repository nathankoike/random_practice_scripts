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
  public void run(HumanPlayer[] players) {
    String action = "Y";

    // While the player wants to continue
    for (int i = 0; action.charAt(0) != 'N' && action.charAt(0) != 'n'; i++) {
      HumanPlayer current = players[i % players.length];

      // Make sure the player can still place bets
      if (current.getBalance() <= 0) break;

      // Get the player's bet
      System.out.println("You currently have " + current.getBalance());
      System.out.print("Enter your wager: ");
      current.placeBet(Integer.parseInt(this.sc.nextLine()));
      System.out.println("--------------------");

      current.playHand(deck);

      // Update the player's balance;
      current.updateBalance(current.sumHand() > 21 ? -1 : 1);

      System.out.println();
      System.out.print("Continue (Y/N): ");
      action = this.sc.nextLine();
      System.out.println("----------------------------------------");
    }
  }
}
