function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0 ) { // 짝수일 경우,
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
       answer = s[Math.floor(s.length/2)]; 
    }
    return answer;
}

// 짝수일 때는 s의 인덱스를 2로 나누어 주고 그 중 [1] 번째와 [2] 째를 반환함

//홀수일때는 math.floor라는 함수를 이용하여 소수점으로 나오는 것을 반버림 해주어 그 중 [2] 번째를 반환함. 
