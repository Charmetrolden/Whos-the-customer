Finder

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Finder {
    public String findFromRight(Customer customer, int numberFromRight) {

        // handle edge cases where input is invalid or out of bounds. 
        if (customer == null || numberFromRight <= 0) {
            return null;
        }

        // Initialize two pointers
        Customer frontPointer = customer;
        Customer backPointer = customer;

        // Move the frontPointer N steps ahead
        for (int i = 0; i < numberFromRight - 1; i++) {
            if (frontPointer.getNextCustomer() == null) {
                return null; // Out of bounds
            }
            frontPointer = frontPointer.getNextCustomer();
        }

        // Move both pointers until the frontPointer reaches the end
        while (frontPointer.getNextCustomer() != null) {
            frontPointer = frontPointer.getNextCustomer();
            backPointer = backPointer.getNextCustomer();
        }

        // At this point, the backPointer is at the Nth node from the end
        return backPointer.getGamertag();

    }
}


/* ** Comments **
This solution iterates through the graph only once and uses constant extra memory.
The two pointers traverse the graph simultaneously, ensuring we find the Nth node from the end efficiently.
*/
