class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size()
         for(int i=0; i<n; i++){
        for(int j=i; j<n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
        for (int i = 0; i < n; i++) {
        for (int j = 0; j < Math.floor(n / 2); j++) {
            [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j], matrix[i][j]]
        }
    }
    }
};

class Solution {
public:
    int maxArea(vector<int>& height) {
           int maxSum = 0;
    int n = height.length;
    int i = 0,j = n - 1;
    while(i<j){
        int w= j-i;
        int h= min(height[i], height[j]);
        int area = h*w;
        maxSum=max(maxSum, area)
        if(height[i] > height[j]){
            j--
        }else{
            i++
        }
    }
    return maxSum
    }
};