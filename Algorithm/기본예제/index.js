const solution = (h, w, n) => {
  let arr = Array(w).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(h).fill(0);
  }
  let l = 2,
    d = 0,
    x = 1,
    y = 1;
  for (let i = 0; i < n; i++) {
    if (i === 1) {
      (l = 3), (d = 1), (x = 2), (y = 3);
    } else if (i === 2) {
      (l = 4), (d = 1), (x = 2), (y = 5);
    } // input 처리
    if (l === 0) {
        if(!arr[x][y]) arr[x][y] = 1;
        else {
            if(d === 0){
                for(let j = 0; j < n; j++){
                    arr[x][y + j] = 1;
                }
            } else {
                for(let j = 0; j < n; j++){
                    arr[x + j][y] = 1;
                }
            }
        }
    }
  }
  return arr;
};

console.log(solution(5, 5, 3));