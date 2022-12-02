function solution(phone_number) {
    var answer = phone_number.length - 4;
    

    return "*".repeat(answer) + phone_number.substring(answer)
    
}

// 첫번째 문제풀이 방법. slice를 사용함. slice를 사용하였을 때는 음수를 인자로 전달할 수 있고, 
//음수를 전달하게 되면 뒤에서부터 인덱스를 위치시킴.
//repeat를 통해 phone_number.length 만큼 *를 반복시키고, slice를 통해 뒤에서 4번이전의 수를 잘라내고 남은 자리수(4444 or 8888)인 phone_number와 합쳐준다. 

// 두번째 문제풀이 방법 substring을 사용함. substring은 특정문자열을 반환하는 것
// answer에 phone_number.length - 4를 통해 뒤에서 4번째 자리까지를 빼주고 answer에 넣어준다
//repeat를 통해 answer의 길이만큼 "*"을 반복시켜주고 substring을 통해 반환한 phone_number.lenght에서 뒤에서 4번쨰 자리수의 문자열을 뺀 나머지(phone_number.lenght - 4)를 반환해주고 repeat한 "*"과 합쳐준다.   



//     if(phone_number.length % 2 === 0){
//         phone_number.replace("01033334444", "*******4444");
//         answer += phone_number 
//     } else {
//      phone_number.replace("027778888", "*****8888")
//          answer += phone_number
//     }
    
    // 나의 문제풀이
    
    // return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    // 결과 암호별(암호*) + 4444 or 8888 