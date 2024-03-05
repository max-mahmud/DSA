//? ========nextPermutation===========31
var nextPermutation = function (nums) {
    let len = nums.length;
    let i = len -1
    for(; i>0; i--){
        if(nums[i] > nums[i-1]) break
    }
    if(i !==0){
        let index = i;
        for(let j= len-1; j>=i; j--){
            if(nums[j] > nums[i-1]){
                index = j
                break
            }
        }
        [nums[i-1], nums[index]] = [nums[index], nums[i-1]]
    }

    let left = i;
    let rigth = len-1;
    while(left < rigth){
        [nums[left], nums[rigth]] = [nums[rigth], nums[left]]
        left++;
        rigth-- ;
    }

};
// Example usage:
let nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1);  // Output: [1, 3, 2]

let nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2);  // Output: [1, 2, 3]

let nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3);  // Output: [1, 5, 1]