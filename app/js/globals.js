//this file will hold global variables and functions for use.
var recentpackdata = new Array(4);
var recentpuzzledata = new Array(8)

const packs = {
    spring: 'card--springpack',
    summer: 'card--summerpack',
    fall: 'card--fallpack',
    winter: 'card--winterpack',
    test: 'card--testpack'
}

var puzzledifficulty = {
    easy: 'card-puzzle-easy',
    medium: 'card-puzzle-medium',
    hard: 'card-puzzle-hard',
    veryhard: 'card-puzzle-veryhard'
};

//arr must be an array of length 4 consisting of var packs elements
function updateRecentPacks(arr){
    localStorage.setItem('recentpack1', arr[0]);
    localStorage.setItem('recentpack2', arr[1]);
    localStorage.setItem('recentpack3', arr[2]);
    localStorage.setItem('recentpack4', arr[3]);
}

function loadRecentPacks(){
    recentpackdata[0] = localStorage.getItem('recentpack1');
    recentpackdata[1] = localStorage.getItem('recentpack2');
    recentpackdata[2] = localStorage.getItem('recentpack3');
    recentpackdata[3] = localStorage.getItem('recentpack4');
}

function loadRecentPuzzles(){
    recentpuzzledata[0] = localStorage.getItem('recentpuzzle1');
    recentpuzzledata[1] = localStorage.getItem('recentpuzzle2');
    recentpuzzledata[2] = localStorage.getItem('recentpuzzle3');
    recentpuzzledata[3] = localStorage.getItem('recentpuzzle4');
    recentpuzzledata[4] = localStorage.getItem('recentpuzzle5');
    recentpuzzledata[5] = localStorage.getItem('recentpuzzle6');
    recentpuzzledata[6] = localStorage.getItem('recentpuzzle7');
    recentpuzzledata[7] = localStorage.getItem('recentpuzzle8');
}

//input is a packs.value
function updateRecents(packname){
    loadRecentPacks();
    var newrecentpacks = new Array(recentpackdata.length);

    let previous;
    if(recentpackdata[0] == packname){
        console.log("theyre the same");
        finishRecentPacks(1, newrecentpacks);
        return;
    } else {
        console.log("theyre NOT the same");
        previous = recentpackdata[0];
        newrecentpacks[0] = packname;
    }

    for(let i = 1; i < recentpackdata.length; i ++){
        if(recentpackdata[i] == packname){
            newrecentpacks[i] = previous;
            finishRecentPacks(i + 1, newrecentpacks)
            break;
        } else {
            newrecentpacks[i] = previous;
            previous = recentpackdata[i];
        }
    }
    updateRecentPacks(newrecentpacks);
}

function finishRecentPacks(i, newpacks){
    for(let x = i; x < recentpackdata.length; x ++){
        if(recentpackdata[i] != undefined){
            newpacks[i] = recentpackdata[i];
        } else {
            newpacks[i] = undefined;
        }
    }
}