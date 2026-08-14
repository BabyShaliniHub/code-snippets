// StudentGrade.java
// Calculate a student's total, average, and grade

public class StudentGrade {

    public static void main(String[] args) {

        String studentName = "Shalini";

        int[] marks = {
            85, 92, 78, 88, 95
        };

        int total = 0;

        // Calculate total marks
        for (int mark : marks) {
            total += mark;
        }

        // Calculate average
        double average =
                (double) total / marks.length;

        // Determine grade
        char grade;

        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Display result
        System.out.println("================================");
        System.out.println("        STUDENT RESULT");
        System.out.println("================================");

        System.out.println(
                "Student : " + studentName
        );

        System.out.println(
                "Subjects: " + marks.length
        );

        System.out.println(
                "Total   : " + total
        );

        System.out.printf(
                "Average : %.2f%n",
                average
        );

        System.out.println(
                "Grade   : " + grade
        );

        System.out.println("================================");
    }
}
