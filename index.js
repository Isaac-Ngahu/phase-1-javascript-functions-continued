// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(string){
    const adjective="a hard worker";
    return `${string} ${adjective} ${string}`;
}
function wrapAdjective(char){
    return function(char2="special"){
return `You are ${char}${char2}${char}!`
    }
}