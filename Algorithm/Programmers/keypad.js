const solution = (numbers, hand) => {
    let answer = "", tmp = 0, x1 = 1, y1 = 0, street = 0, x2 = 0, y2 = 0;
    const key = { // (x, y) 로 설정
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    };
    const leftHand = key['*'], rightHand = key['#'];
    let a = hand === "left" ? "L" : "R";
    for(let i = 0; i < numbers.length; i++){
        let left = false;
        console.log(left);
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += "L";
            tmp = numbers[i];
        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += "R";
            tmp = numbers[i];
        } else{
            
        }
    }
    return answer;
}
/*
1, 4, 7 왼손 손가락
3, 6, 9 오른손 손가락
2 5 8 0 가까운 손가락

*/