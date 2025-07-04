public class FinancialForecast {

    public static double futureValueRecursive(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return (1 + rate) * futureValueRecursive(presentValue, rate, years - 1);
    }

    public static double futureValueOptimized(double presentValue, double rate, int years) {
        return presentValue * Math.pow(1 + rate, years);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.05;
        int years = 10;
        System.out.println("Recursive Forecast: Rs." + futureValueRecursive(presentValue, growthRate, years));
        System.out.println("Optimized Forecast: Rs." + futureValueOptimized(presentValue, growthRate, years));
    }
}
