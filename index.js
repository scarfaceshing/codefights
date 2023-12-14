function solution(sequence) {
  let getOptions = [];

  let seq = sequence.reduce((total, current, index, arr) => {
    let step = arr[index + 1];
    let third = arr[index + 2];

    if (step && current >= step) {
      total.push(index);
    } else if (third && current >= third) {
      total.push(index + 2);
    }

    return total;
  }, []);

  seq.forEach((item_a) => {
    let filteredSeq = sequence.filter((item_b, index_b) => {
      return index_b !== item_a;
    });

    getOptions.push(filteredSeq);
  });

  console.log(getOptions);

  let collection = [];

  getOptions.forEach((option, index) => {
    let result = option.every((current, index, arr) => {
      let back = arr[index - 1] ?? null;

      if (back === null) return true;

      if (back < current) return true;

      return false;
    });

    collection.push(result);
  });

  return collection.some((collect) => collect);
}

module.exports = solution;
