const solution = n => {
    if(n < 10) return 0;
    if(n >= 500) return 1 + solution(n-500);
    else if(n < 500 && n >= 100) return 1 + solution(n - 100);
    else if(n < 100 && n >= 50) return 1 + solution(n - 50);
    else if(n < 50 && n >= 10) return 1 + solution(n - 10);
} // 내가 풀어본 코드

const teacher = n => {
    let cnt = 0;
    let list = [500, 100, 50, 10];
    list.sort((a, b) => b - a);
    for(let i = 0;i < list.length; i++){
        cnt += n;
        n %= coin;
    }
}  // 선생님 코드

console.log(solution(1270)); // output : 7

console.log(solution(5870)); // output : 17