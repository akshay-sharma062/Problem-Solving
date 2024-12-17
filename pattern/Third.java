
// A
// AB
// ABC
// ABCD

public class Third {
    public static void main(String[] args) {
        int n=5;
        for (int i = 0; i < n; i++) {
            char ch=(char)(65);
            for (int j = 0; j < i; j++) {
                System.out.print(ch++);
            }
            System.out.println();
        }
    }
}
