
  function solution(num) {
    var answer = '';
    
    if(num % 2 === 0){
        answer += "Even"
        
    } else{
        answer += "Odd"    
    
    }
    
    return answer;
}

//num은 int가 정수의 범위이고 0은 짝수라면 
//if문을 사용하여 num을 2로 나눴을 때 0으로 나눠지면 EVEN을 반환하고 그렇지 않으면 Odd를 반환하도록 함.