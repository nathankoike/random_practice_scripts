package blackjack;

public class Dealer extends Player {
  public static String name = "Dealer";

  public Dealer() {
    super();
  }

  public void playHand(Deck deck) {
    // Draw until the value of the hand is at least 16
    for (; this.sumHand() < 16; this.addCard(deck.draw()));
  }
}
