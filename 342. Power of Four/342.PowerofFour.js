function isPowerOfFour(n) {
  // Check if n is positive, a power of two, and the only set bit is in an odd position.
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}
