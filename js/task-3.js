function filterArray(numbers, value) {
  let newArray = [];
  for (const element of numbers) {
    if (element > value) {
      newArray.push(element);
    }
  }
  return newArray;
}
