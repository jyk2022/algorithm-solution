function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            answer = answer + absolutes[i];
        } else{
            answer = answer - absolutes[i];
        }
    }
    return answer

    absolutes.some()
}

// sign과 absolutes는 1대 1로 대응함. 
// 즉 그렇기 때문에 tre일 때와 false일 때를 각각 상정하여 정수는 그냥 더해주고, 
//음수일 때는 마이너스 두개가 만나 플러스가 되도록하여 합을 구해주면 됨. 