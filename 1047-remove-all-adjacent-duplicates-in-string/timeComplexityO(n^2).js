var removeDuplicates = function(s) {
    const splitS = s.split('');
    let temp = splitS;
    
    let removed = true;
    
    while (removed) {
        removed = false;
        for (const index in temp) {
            if (temp[parseInt(index)] == temp[parseInt(index)+1]){
                temp.splice(parseInt(index),2);
                removed = true;
            }    
        }
    }
    let answer = temp.join("");
    console.log(answer);
    return answer;
};

removeDuplicates("abbaca");
