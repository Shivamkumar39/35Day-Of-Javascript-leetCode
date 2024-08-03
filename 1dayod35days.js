function longestPalindrome(s) {
    let n = s.length;
    if (n <= 1) return s;
  
    // Table to store results of subproblems
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
  
    // All substrings of length 1 are palindromes
    let start = 0;
    let maxLength = 1;
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }
  
    // Check for sub-string of length 2.
    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLength = 2;
      }
    }
  
    // Check for lengths greater than 2. k is the length of the substring
    for (let k = 3; k <= n; k++) {
      for (let i = 0; i < n - k + 1; i++) {
        // Ending index of current substring is j
        let j = i + k - 1;
  
        // Checking for substring from ith index to jth index
        // iff s[i+1] to s[j-1] is a palindrome
        if (dp[i + 1][j - 1] && s[i] === s[j]) {
          dp[i][j] = true;
  
          if (k > maxLength) {
            start = i;
            maxLength = k;
          }
        }
      }
    }
  
    return s.substring(start, start + maxLength);
  }
  
  // Example usage:
  console.log(longestPalindrome("babab gjchgcg")); // Output: "bab" or "aba"
  