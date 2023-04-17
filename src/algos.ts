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
export function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}