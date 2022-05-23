package blackjack;

import java.util.Scanner;

public class HumanPlayer extends Player {
  protected Scanner sc = new Scanner(System.in);
  protected int balance;
  protected int wager;
  public String name;

  // Make a human player
  public HumanPlayer(String name, int balance) {
    super();

    this.name = name;
    this.balance = balance;
  }

  // How much money does the player have?
  public int getBalance() {
    return this.balance;
  }

  // Place a bet
  public void placeBet(int amount) {
    this.wager = amount;
  }

  // Update the player's balance based on the outcome of the round
  public void updateBalance(int outcome) {
    // Only modify the balance if the player won or lost (0 is falsy)
    if (outcome != 0) this.balance += outcome * this.wager;
  }

  // Play a hand
  public void playHand(Deck deck) {
    String action = "h";
    this.addCard(deck.draw());

    // While the player wants to continue
    while (action.charAt(0) != 'S' && action.charAt(0) != 's') {
      this.addCard(deck.draw());

      System.out.println("Your hand: " + getHand());
      System.out.println("    Total: " + this.sumHand());

      // If the player lost or is at 21, prevent them from continuing
      if (this.sumHand() > 20) break;

      System.out.print("Hit (H) or Stand (S): ");
      action = this.sc.nextLine();
    }
  }
}
