//  * * * * *
//   * * * *
//    * * *
//     * *
//      *
//      *
//     * *
//    * * *   
//   * * * *
//  * * * * * 

public class Thirteenth {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
                
            }
            for (int j = n; j >i ; j--) {

                System.out.print("* ");
                
            }  
            if (i<n-1) {
                
                System.out.println();  
            }



            
        }
        for (int i = 0; i < n; i++) {
            for (int j = n; j > i+1; j--) {
                System.out.print(" ");
                
            }
            for (int j = 0; j <i+1 ; j++) {

                System.out.print("* ");
                
            }  
            System.out.println();          
        }
    }
}
