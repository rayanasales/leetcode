import java.util.HashMap;
import java.util.Map;

public class Solution {
    private Map<Integer, Integer> memo = new HashMap<>();

    public int fib(int targetN) {
        if (targetN == 0) return 0;
        if (targetN == 1) return 1;

        if (memo.containsKey(targetN)) return memo.get(targetN);

        int result = fib(targetN - 1) + fib(targetN - 2);
        memo.put(targetN, result);

        return result;
    }
}