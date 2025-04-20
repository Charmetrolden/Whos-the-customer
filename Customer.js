import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Customer {
    private Customer nextCustomer;
    private String gamertag;

    public Customer(Customer nextCustomer, String gamertag) {
        this.nextCustomer = nextCustomer;
        this.gamertag = gamertag;
    }

    public Customer getNextCustomer() {
        return this.nextCustomer;
    }

    public String getGamertag() {
        return this.gamertag;
    }
}
