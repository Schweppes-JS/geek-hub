function myFor(start, end) {
  if (start < end) {
    start++;
    myFor(start, end);
  }
  return;
}