function convertToBinary(number: number): string {
  if (number === 0) {
    return "0";
  }

  let binary = "";
  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}

function convertBinaryToNumber(binary: string): number {
  let number = 0;
  for (let i = 0; i < binary.length; i++) {
    number = number * 2 + parseInt(binary[i]);
  }

  return number;
}

const sortBinary = (a: string, b: string) => {
  // my initial solution -> quite messy
  //   const minimumLength = Math.min(a.length, b.length);
  //   const sliceA = a.slice(0, minimumLength);
  //   const sliceB = b.slice(0, minimumLength);
  //   const compare = sliceA.localeCompare(sliceB);
  //   if (compare === 0) {
  //     if (a.length === b.length) {
  //       return 0;
  //     }
  //     const subSliceA = a.length === minimumLength ? a : a.slice(minimumLength);
  //     const subSliceB = b.length === minimumLength ? b : b.slice(minimumLength);
  //     return sortBinary(subSliceA, subSliceB);
  //   }
  //   return -compare;

  // much cleaner from a random guy
  return -(a + b).localeCompare(b + a);
};

function maxGoodNumber(nums: number[]): number {
  const binaryNums = nums.map(convertToBinary);
  binaryNums.sort(sortBinary);
  const binaryString = binaryNums.join("");

  return convertBinaryToNumber(binaryString);
}
