#include <stdio.h>
#include <string.h>

// check alphanumeric
int isAlphaNum(char c) {
    if ((c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9'))
        return 1;
    return 0;
}

// convert to lowercase
char toLowerCase(char c) {
    if (c >= 'A' && c <= 'Z')
        return c + 32;
    return c;
}

int isPalindrome(char* s) {
    int left = 0;
    int right = strlen(s) - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (toLowerCase(s[left]) != toLowerCase(s[right]))
            return 0;

        left++;
        right--;
    }

    return 1;
}