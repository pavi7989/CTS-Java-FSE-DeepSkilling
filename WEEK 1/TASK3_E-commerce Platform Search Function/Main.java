import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shampoo", "Beauty"),
                new Product(103, "Book", "Education"),
                new Product(104, "Shoes", "Fashion"),
                new Product(105, "Phone", "Electronics")
        };

        System.out.println("Linear Search Result:");
        Product found1 = ProductSearch.linearSearch(products, "Book");
        System.out.println(found1 != null ? found1 : "Product not found");
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        System.out.println("\nBinary Search Result:");
        Product found2 = ProductSearch.binarySearch(products, "Book");
        System.out.println(found2 != null ? found2 : "Product not found");
    }
}
