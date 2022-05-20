package blackjack;

public class HumanPlayer extends Player {
  public String name;
  protected int balance;
  protected int wager;

  // Make a human player
  public HumanPlayer(String name, int balance) {
    this.name = name;
    this.balance = balance;

    super();
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
    if (outcome) this.balance += outcome * this.wager;
  }

  // Play a hand
  public void playHand() {
    String action = "";

    // While the player wants to continue
    while (action.charAt(0) != 'N' && action.charAt(0) != 'n') {
      
    }
  }
}
