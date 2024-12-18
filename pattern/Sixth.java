
// A
// BC
// CDE
// DEFG

public class Sixth {
    public static void main(String[] args) {
        int n = 5;
        // int ch= 64;
        for (int i = 0; i <= n; i++) {
           int ch=64+i;
            for (int j = 0; j < i; j++) {

                System.out.print((char)(ch++) );
            }
            System.out.println();
        }
    }
}
