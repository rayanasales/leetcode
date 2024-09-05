class Solution {
    public String reverseVowels(String s) {
        char[] arr = s.toCharArray();
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            while (left < right && !isVowel(arr[left])) {
                left++;
            }
            while (left < right && !isVowel(arr[right])) {
                right--;
            }
            if (left < right) {
                char temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        return new String(arr);
    }

    private boolean isVowel(char letter) {
        char[] vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        for (char vowel : vowels) {
            if (letter == vowel) {
                return true;
            }
        }
        return false;
    }
}