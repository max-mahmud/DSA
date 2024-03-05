// ? 352. Data Stream as Disjoint Intervals
var SummaryRanges = function() {
    this.set = new Set()
};

SummaryRanges.prototype.addNum = function(value) {
   this.set.add(value)
};

SummaryRanges.prototype.getIntervals = function() {
    let nums = [...this.set]
    nums.sort((a,b)=>a-b)
    let n = nums.length;
    let result =[];
    for(let i =0; i<n; i++){
        let start = nums[i]
        while(i<n-1 && nums[i]+1 === nums[i+1]){
            i++
        }
        result.push([start, nums[i]])
    }
    return result
};

// Example usage
const summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);
console.log(summaryRanges.getIntervals()); // Output: [[1, 1]]
summaryRanges.addNum(3);
console.log(summaryRanges.getIntervals()); // Output: [[1, 1], [3, 3]]
summaryRanges.addNum(7);
console.log(summaryRanges.getIntervals()); // Output: [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);
console.log(summaryRanges.getIntervals()); // Output: [[1, 3], [7, 7]]
summaryRanges.addNum(6);
console.log(summaryRanges.getIntervals()); // Output: [[1, 3], [6, 7]]