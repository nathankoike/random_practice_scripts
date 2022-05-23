package blackjack;

import java.util.List;
import java.util.ArrayList;

public abstract class Player {
  protected List<String> hand = new ArrayList<String>();

  protected void addCard(String card) {
    this.hand.add(card);
  }

  public List<String> getHand() {
    return this.hand;
  }

  // What is the total value of the player's hand?
  public int sumHand() {
    String royals = "JQK";

    int sum = 0;
    Object[] cards = hand.toArray();

    // Aces are special
    int aceCount = 0;

    // For every card in the player's hand
    for (int i = 0; i < hand.size(); i++) {
      // If the card is an ace
      if (((String) cards[i]).charAt(0) == 'A') {
        // Note that we have an ace
        aceCount++;

        // Increase the sum by the minimum amount;
        sum++;
      }
      else {
        // If the card is a face card
        if (royals.indexOf(((String) cards[i]).charAt(0)) >= 0) sum += 10;
        else {
          sum += Integer.parseInt(
            ((String) cards[i]).substring(0, ((String) cards[i]).length() - 1));
        }
      }
    }

    // If the player has aces, increase the value of the sum as much as possible
    if (aceCount > 0)
      for (; 11 - sum > 0 && aceCount > 0; sum += 10 * (aceCount - --aceCount));

    return sum;
  }

  // Play a hand
  public abstract void playHand(Deck deck);
}
