package SingletonPatternExample;

public class Main {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        log1.log("First log ");
        log2.log("Second log ");
        if (log1 == log2) {
            System.out.println("Both logs are the same.");
        } else {
            System.out.println("Different logs detected!");
        }
    }
}
