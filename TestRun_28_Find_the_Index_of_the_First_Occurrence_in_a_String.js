let heystack = "lolbutsad";
let heystackArr = heystack.split('');
let needle = "sad";
let needleArr= needle.split('');
console.log(heystackArr);
let checkedNeedle = [];
let j = 0;

for (let i = 0 ; i < heystackArr.length ; i++) {

    let found = true;
    
    console.log(`'i am checking'${i}`);

    if(heystackArr[i] !== needleArr[j]) {
        found = false;
        j = 0;
    } 
 
    else {
        console.log('Match Found');
        checkedNeedle.push(needleArr[i]);
        found=true;
        j++;
    } 

    console.log(j);  

}

// console.log(checkedNeedle);

// if (checkedNeedle.length == needleArr.length) {
//     console.log('yay')
// }

//만약 헤이[i] 와 니들[i]가 같은지 비교한다.
//니들의 길이 동안 다 똑같은지 비교한다..
//만약 니들의 길이동안 모든 요소가 같다면 첫번째 인덱스를 반환한다.
