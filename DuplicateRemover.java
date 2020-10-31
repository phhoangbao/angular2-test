import java.util.concurrent.atomic.AtomicInteger;

public class DuplicateRemover {

    private static void removeDuplicates(int input[], int output[], AtomicInteger finalOutputSize) {
        System.out.print("Not Implemented");
        
    }

    public static void main(String[] args) {
        int array[] = { 1, 10, 3, 9, 7, 8, 9, 9, 9, 10 };
        int output[] = new int[array.length];
        AtomicInteger finalOutputSize = new AtomicInteger();
        removeDuplicates(array, output, finalOutputSize);
        System.out.print("output[");
        for (int i = 0; i < finalOutputSize.intValue(); ++i) {
            System.out.print(output[i] + " ");
        }
        System.out.println("]");
        return;
    }
}
