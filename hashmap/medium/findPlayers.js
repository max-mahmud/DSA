// ? 2225. Find Players With Zero or One Losses
// function findPlayers(matches) {
//     const wins = {};
//     const losses = {};

//     for (let [win, loss] of matches) {
//         wins[win] = (wins[win] || 0) + 1
//         losses[loss] = (losses[loss] || 0) + 1
//     }
//     const playerAllWin = Object.keys(wins).filter(pl => !losses[pl]).sort((a, b) => a - b)
//     const playerOneWin = Object.keys(losses).filter(pl => losses[pl] === 1).sort((a, b) => a - b)

//     return [playerAllWin.map(Number), playerOneWin.map(Number)]
// }

// let matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
// // Output: [[1,2,10],[4,5,7,8]]
// console.log(findPlayers(matches))
// ******** *******************Second Aproach********************
// function findPlayers(matches) {
//     const wins = new Array(100001).fill(0);
//     const losses = new Array(100001).fill(0);
//     const playersWithZeroLoss = [];
//     const playersWithOneLoss = [];

//     // Record wins and losses
//     for (const [winner, loser] of matches) {
//         wins[winner]++;
//         losses[loser]++;
//     }

//     // Find players with zero losses and exactly one loss
//     for (let i = 1; i <= 100000; i++) {
//         if (wins[i] > 0 && losses[i] === 0) {
//             playersWithZeroLoss.push(i);
//         } else if (wins[i] === 1 && losses[i] === 1) {
//             playersWithOneLoss.push(i);
//         }
//     }

//     return [playersWithZeroLoss, playersWithOneLoss];
// }

// // Test cases
// const matches1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
// const matches2 = [[2,3],[1,3],[5,4],[6,4]];

// console.log(findPlayers(matches1)); // Output: [[1, 2, 10], [4, 5, 7, 8]]
// console.log(findPlayers(matches2)); // Output: [[1, 2, 5, 6], []]