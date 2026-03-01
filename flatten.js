function flattenArray(arr) {
  let result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  flatten(arr);
  return result;
}

console.log(flattenArray([[10, [20, 30], [40, [50, 60]], 70]]));
