// Problem 1
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
    let a = '';
    let strLen = str.length;
    if(typeof(str)==='string'){
        for (let i = 0;i<str.length;i++){
            strLen = strLen-1;
            a += str[strLen];
        }
        return a;
    }
}

console.log(solution('mad'));



