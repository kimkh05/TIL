const solution = (priorties, location) => {
    let cnt = 0;
    const LEN = priorties.length;
    while(true){
      let max = 0;
      let front = 0;
      for(let j = 0; j < location; j++) if(priorties[j] > max) max = priorties[j];
      while(priorties[front] !== max) front = (front + 1) % LEN;
      if(front === location) break;
      priorties[front] = 0;
      front = (front + 1) % LEN;
      cnt++;
      console.log("check");
    }
    return cnt;
}

console.log(solution([2, 1, 3, 2], 2));

console.log(solution([1, 1, 9, 1, 1, 1], 0))