// ? 57. Insert Interval
function insertInterval(intervals, newInterval) {
    let result = [];
    let i =0;
    let n = intervals.length;

    while(i < n && intervals[i][1] < newInterval[0]){
        result.push(intervals[i])
        i++
    }
    while(i < n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }

    result.push(newInterval);

    while (i < n) {
        result.push(intervals[i]);
        i++;
    }
    return result;
}

// // Example 1
// const intervals1 = [[1,3],[6,9]];
// const newInterval1 = [2,5];
// console.log(insertInterval(intervals1, newInterval1)); // Output: [[1,5],[6,9]]

// // Example 2
const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval2 = [4,8];
console.log(insertInterval(intervals2, newInterval2));
 // Output: [[1,2],[3,10],[12,16]]