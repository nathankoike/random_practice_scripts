package blackjack;

import java.util.ArrayList;

public abstract class Player {
  protected List<String> hand = ArrayList<String>();

  public List<String> getHand() {
    return this.hand;
  }

  public void addCard(String card) {
    this.hand.add(card);
  }

  // Play a hand
  public void PlayHand();
}
