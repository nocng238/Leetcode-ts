import { isPrime } from '../src/algos'
export  function diagonalPrime(nums: number[][]): number {
    let res : number = 0;
    for (let index = 0; index < nums.length; index++) {
        for(let j = 0; j < nums[0].length; j++){
            if( (index === j || index === Math.abs(j-nums.length+1)) && isPrime(nums[index][j]) ){
                res = Math.max(res,nums[index][j])
            }
        }
        
    }
    return res
};
export function distance(nums: number[]): number[] {
    let res:number[] = []
    const map = new Map<number,number[]>();
    nums.forEach((num,index)=>{
        if(map.has(num)){
            const prefixArray = map.get(num)
            prefixArray?.push(prefixArray[prefixArray.length-1]+index)
            map.set(num,prefixArray || [])
        }else{
            map.set(num,[index])
        }
    })
    console.log(map)
    return res
};