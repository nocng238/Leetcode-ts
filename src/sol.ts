import { stringify } from "querystring";
import { exec } from "child_process";
export function _2549(n: number): number {
  if (n <= 2) return 1;
  else return n - 1;
}
export function _2550(n: number): number {
  return 1;
}

export function _1817(logs: number[][], k: number): number[] {
  const res: number[] = new Array(k);
  res.fill(0, 0, k);
  const map: Map<number, Set<number>> = new Map();
  for (let i = 0; i < logs.length; i++) {
    if (map.has(logs[i][0])) {
      map.get(logs[i][0])?.add(logs[i][1]);
    } else {
      const set: Set<number> = new Set();
      set.add(logs[i][1]);
      map.set(logs[i][0], set);
    }
  }
  map.forEach((value: Set<number>, key: number) => {
    res[value.size - 1]++;
  });
  return res;
}
export function _763(s: string): number[] {
  const res: number[] = [];
  const checkboard: number[] = new Array(27);
  checkboard.fill(0, 0, 27);
  for (let i = 0; i < s.length; i++) checkboard[s.charCodeAt(i) - 97]++;
  let set: string[] = [];
  for (let i = 0; i < s.length; i++) {
    set.push(s.charAt(i));
    checkboard[s.charCodeAt(i) - 97]--;
    let checkFlag: Boolean = true;
    for (let char of set) {
      if (checkboard[char.charCodeAt(0) - 97] != 0) {
        checkFlag = false;
        break;
      }
    }
    if (checkFlag) {
      res.push(set.length);
      set = [];
    }
  }
  return res;
}

export function _1079(tiles: string): number {
  let res: number = 0;

  return res;
}

export function _811(cpdomains: string[]): string[] {
  let res: string[] = [];

  return res;
}
export function _2562(nums: number[]): number {
  let res: number = 0;
  let middle: number = Math.floor(nums.length / 2);
  for (let index = 0; index < middle; index++) {
    res += parseInt(
      nums[index].toString() + nums[nums.length - 1 - index].toString()
    );
  }
  if (nums.length % 2 == 1) res += nums[middle];
  return res;
}
// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
export function countFairPairs_2563(
  nums: number[],
  lower: number,
  upper: number
): number {
  let res: number = 0;
  let pairArray: pair[] = [];
  nums.forEach((value, index) => {
    pairArray.push(new pair(index, value));
  });
  const map = new Map<number, number>();
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
  const newArray: number[] = Array.from(map.keys());
  newArray.sort();

  // pairArray.sort((a, b) => {
  //   return a.y - b.y;
  // });
  let left: number = 0;
  let right: number = newArray.length - 1;
  while (left < right) {
    if (left) {
    }
  }
  return res;
}
class pair {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export function getBranchName() {
  let branchName: string = "";
  exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
    if (err) {
      // handle your error
    }

    if (typeof stdout === "string" && stdout.trim() === "master") {
      console.log(`The branch is master`);
      branchName = "production";
      // Call your function here conditionally as per branch
    } else branchName = "dev";
  });
}
export function _2586(words: string[], left: number, right: number): number {
  let res: number = 0;
  const vowelChar = new Set(["a", "e", "i", "o", "u"]);
  const newWords = words.slice(left, right + 1);
  for (const word of newWords) {
    if (
      vowelChar.has(word.charAt(0)) &&
      vowelChar.has(word.charAt(word.length - 1))
    ) {
      res++;
    }
  }

  return res;
}
export function _2587(nums: number[]): number {
  let res: number = 0;
  nums.sort(function (a, b) {
    return b - a;
  });
  if (nums[0] > 0) res++;
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1];
    if (nums[index] > 0) {
      res++;
    } else break;
  }
  return res;
}
export function _2588(nums: number[]): number {
  let res: number = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[i] ^= nums[i - 1];
  }
  console.log(nums);
  return res;
}

export function asdas(nums: number[]): number {
  return 0;
}