/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller 
sticks, discarding the shortest pieces until there are none left. At each iteration you will determine 
the length of the shortest stick remaining, cut that length from each of the longer sticks and then 
discard all the pieces of that shortest length. When all the remaining sticks are the same length, they 
cannot be shortened so discard them. Given the lengths of some number of sticks, return an array 
containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever 
there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr){
  let len = arr.length;
  let sticks = new Array();
  for(i = 0; i < len; i++){
    sticks[i] = arr[i];
  }
  let sbc = new Array();
  let smallest = sticks[0];
  for (j = 0; j < sticks.length; j++){
    if(smallest > sticks[j]){
      smallest = sticks[j];
    }
  }
  for(k = 0; j < sticks.length; k++){
    sticks[k] -= smallest;
  }

}

module.exports = solution;
