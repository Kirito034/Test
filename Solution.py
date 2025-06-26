from collections import Counter
import sys

def first_non_repeating(nums):
    """
    Returns the first non-repeating number in the list.
    If all numbers repeat, returns -1.
    """
    freq = Counter(nums)
    
    for num in nums:
        if freq[num] == 1:
            return num
    return -1

if __name__ == "__main__":
    # Read input from stdin (works with file redirection)
    n = int(sys.stdin.readline())
    nums = list(map(int, sys.stdin.readline().split()))
    
    result = first_non_repeating(nums)
    print(result)
