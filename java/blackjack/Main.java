package blackjack;

public class Main {
  public static void main(String[] args) {
    // System.out.println("asdklh");

    Game game = new Game();

    HumanPlayer player = new HumanPlayer("n", 500);
    Dealer dealer = new Dealer();

    HumanPlayer[] players = {player};

    game.run(players);
  }
}
