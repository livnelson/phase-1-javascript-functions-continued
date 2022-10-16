function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
};

saturdayFun();


let mondayWork = function(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
};

mondayWork();


let wrapAdjective = function(wrap="*") {
    return function(adj="special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
}

wrapAdjective();
