function solution(numbers) {
    let answer = 0;
    
    for(let i = 0; i <10; i++){
        if(!numbers.includes(i))
            answer += i 
    }
     
        return  answer  ;
    }

//answer가 0일때 함수 for 문으로 10번을 돌림.
//만약 i가 !numbers.includes(숫자 배열 속에 없다는 것)를 통해 배열에 숫자가 있는 지 없는지 확인함.

//  **.includes(i) 메소드는 배열 속의 요소의 값이 있는 지 없는 지를 찾는 것 **

// 만약에 배열 속에 없는 숫자라면 answer에 i를 더함.
// 이렇게 배열에 없는 숫자를 다 찾아서 더할 수 있음. 