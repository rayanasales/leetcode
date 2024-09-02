public class Solution {
    public int fib(int targetN) {
        if (targetN == 0) return 0;
        if (targetN == 1) return 1;

        int a = 0, b = 1;
        for (int i = 2; i <= targetN; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}