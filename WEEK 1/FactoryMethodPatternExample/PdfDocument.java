package FactoryMethodPatternExample;

public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opened Pdf Doc");
    }
}
