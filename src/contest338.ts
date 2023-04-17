export function _2600(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
  let res :number = 0;
  if(numOnes >=k) return k
  if(numOnes+numZeros >= k){
    return numOnes
  }
  return numOnes - (k-numOnes-numZeros);
};
function getPrimes(max: number): number[] {
  const primes: number[] = [];
  const isPrime: boolean[] = new Array(max + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes;
}

export function minOperations(nums: number[], queries: number[]): number[] {
  let res : number[] = []
  const length = nums.length
  nums.sort()
  const prefixSumArray= prefixSum(nums)
  for(const query of queries){
    if(query >= nums[length-1] || query <= nums[0]){
      const numberOfOperation = Math.abs(query*length - prefixSumArray[length-1])
      res.push(numberOfOperation)
      continue;
    }
    const middleIndex = binarySearch(nums,query)
    if(middleIndex === 0){
      const numberOfOperation = Math.abs(prefixSumArray[0] - query) + Math.abs(prefixSumArray[length-1] - prefixSumArray[0] - query*(length-1))
      res.push(numberOfOperation)
    }else if(middleIndex === length - 1){
      const numberOfOperation = Math.abs(nums[middleIndex] - query) + Math.abs(prefixSumArray[middleIndex-1] - query*(length-1))
      res.push(numberOfOperation)
    }else{
      const numberOfOperation = Math.abs(prefixSumArray[middleIndex-1] - query * middleIndex) + Math.abs(prefixSumArray[length-1] - prefixSumArray[middleIndex-1] - query*(length-middleIndex))
      res.push(numberOfOperation)
    }
  }
  return res
  
};

  // Binary search function
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return mid;
  }
export function getSplitIndex(arr: number[], target: number) {
  let n = arr.length
    let low = 0, high = n - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= target) high = mid;
      else low = mid + 1;
    }
    return arr[low] >= target ? low : n;
  }

function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
 
function prefixSum(nums : number[]) : number[]{
  const res: number[] = []
  res.push(nums[0]);
  for(let i = 1;i < nums.length; i++){
    res.push(res[i-1]+nums[i]);
  }
  return res
}
