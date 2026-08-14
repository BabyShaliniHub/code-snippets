// EmployeePayroll.java
// Generate an employee salary slip.
// Demonstrates classes, objects, encapsulation, methods, and salary calculations.

class Employee {

    private int employeeId;
    private String name;
    private double basicSalary;

    public Employee(
            int employeeId,
            String name,
            double basicSalary) {

        this.employeeId = employeeId;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    public double calculateHRA() {
        return basicSalary * 0.20;
    }

    public double calculateDA() {
        return basicSalary * 0.10;
    }

    public double calculateGrossSalary() {

        return basicSalary
                + calculateHRA()
                + calculateDA();
    }

    public double calculateTax() {

        return calculateGrossSalary() * 0.10;
    }

    public double calculateNetSalary() {

        return calculateGrossSalary()
                - calculateTax();
    }

    public void printSalarySlip() {

        System.out.println(
                "==========================================");

        System.out.println(
                "              EMPLOYEE PAYSLIP");

        System.out.println(
                "==========================================");

        System.out.println(
                "Employee ID   : " + employeeId);

        System.out.println(
                "Employee Name : " + name);

        System.out.printf(
                "Basic Salary  : ₹%.2f%n",
                basicSalary);

        System.out.printf(
                "HRA           : ₹%.2f%n",
                calculateHRA());

        System.out.printf(
                "DA            : ₹%.2f%n",
                calculateDA());

        System.out.printf(
                "Gross Salary  : ₹%.2f%n",
                calculateGrossSalary());

        System.out.printf(
                "Tax           : ₹%.2f%n",
                calculateTax());

        System.out.printf(
                "Net Salary    : ₹%.2f%n",
                calculateNetSalary());

        System.out.println(
                "==========================================");
    }
}


public class EmployeePayroll {

    public static void main(String[] args) {

        Employee employee = new Employee(
                101,
                "Shalini",
                50000
        );

        employee.printSalarySlip();
    }
}
