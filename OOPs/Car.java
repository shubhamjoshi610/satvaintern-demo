public class Car extends Vehicle {
    String model;
    int year;

    // Constructor
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    // Method
    public void displayInfo() {
        System.out.println("Model: " + model + ", Year: " + year);
    }

    @Override
    void start() {
        System.out.println("Car starts");
    }
}
