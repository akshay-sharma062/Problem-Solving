
// A
// BC
// DEF
// GHIJ
// KLMNO

public class Seven {
    public static void main(String[] args) {
        int n = 6;
        int ch = 65;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print((char)(ch++));
            }
            System.out.println();
          
        }
    }
}
