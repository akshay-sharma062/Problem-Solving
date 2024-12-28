//  0 1 2 3 4 5 6
//   1 2 3 4 5 6
//    2 3 4 5 6
//     3 4 5 6
//      4 5 6
//       5 6
//        6

public class Sixteenth {
    public static void main(String[] args) {
        
        int n = 7 ;
        for (int i = 0; i <n ; i++) {
            int k = i;
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }
            for (int j = n; j > i; j--) {
                System.out.print( " "+k++);

            }
            System.out.println();
        }
    }
        
}
