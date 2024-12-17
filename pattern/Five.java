
// 1
// 23
// 345
// 4567

public class Five {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i < n; i++) {
            int  x = i;
            for (int j = 0; j < i; j++) {

                System.out.print(x++);

            }

            System.out.println();
        }
    }
}
