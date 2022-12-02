function solution(arr) {
    var answer = 0;
    
    for (const i of arr){
      answer += i
      
    }     
      answer /= arr.length
    return answer;
}

      
      
//arr 는 1 ~ 100 사이의 배열을 index를 가짐
//arr의 원소는  - 10,000과 10,000 이하인 정수를 값으로 가짐.
//for (const 배열의 요소의 값 of 배열) 을 사용하여 배열의 전체 값을 더하고 그 배열의 개수대로 나누어주었음.