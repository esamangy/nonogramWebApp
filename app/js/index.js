//these are for the recent packs
const recentpackcards = [document.getElementById('recentpack1'), 
                document.getElementById('recentpack2'),
                document.getElementById('recentpack3'),
                document.getElementById('recentpack4')];

var packs = ['card--springpack', 'card--summerpack',
            'card--fallpack', 'card--winterpack', 'card--testpack'];
var recentpackdata = new Array(4);

const recentpuzzlecards = [document.getElementById('recentpuzzle1'), 
                document.getElementById('recentpuzzle2'),
                document.getElementById('recentpuzzle3'),
                document.getElementById('recentpuzzle4'),
                document.getElementById('recentpuzzle5'),
                document.getElementById('recentpuzzle6'),
                document.getElementById('recentpuzzle7'),
                document.getElementById('recentpuzzle8')];
//these are for the recent puzzles
var puzzles = ['card-puzzle-easy', 'card-puzzle-medium',
                'card-puzzle-hard', 'card-puzzle-veryhard'];
var recentpuzzledata = new Array(8);

function indexLoad(){
    loadRecents();
    setRecents();
    
}

function loadRecents(){
    recentpackdata[0] = localStorage.getItem('recentpack1');
    recentpackdata[1] = localStorage.getItem('recentpack2');
    recentpackdata[2] = localStorage.getItem('recentpack3');
    recentpackdata[3] = localStorage.getItem('recentpack4');

    recentpuzzledata[0] = localStorage.getItem('recentpuzzle1');
    recentpuzzledata[1] = localStorage.getItem('recentpuzzle2');
    recentpuzzledata[2] = localStorage.getItem('recentpuzzle3');
    recentpuzzledata[3] = localStorage.getItem('recentpuzzle4');
    recentpuzzledata[4] = localStorage.getItem('recentpuzzle5');
    recentpuzzledata[5] = localStorage.getItem('recentpuzzle6');
    recentpuzzledata[6] = localStorage.getItem('recentpuzzle7');
    recentpuzzledata[7] = localStorage.getItem('recentpuzzle8');
}

function setRecents(){
    setRecentPacks();
    setRecentPuzzles();
}

function setRecentPacks(){
    for(let i = 0; i < recentpackdata.length; i ++){
        if(recentpackdata[i] != null){
            recentpackcards[i].classList = 'card card-puzzle ' + rdata[i];
        } else {
            if(i == 0){
                var currobject = recentpackcards[i];
                while(currobject.getAttribute("name") != 'recentpacksection'){
                    currobject = currobject.parentElement;
                }
                currobject.style.display = 'none';
            } else {
                recentpackcards[i].style.display = 'none';
            }
        }
    }
}
//"card card-puzzle card-puzzle-easy"
function setRecentPuzzles(){
    for(let i = 0; i < recentpuzzledata.length; i ++){
        if(recentpuzzledata[i] != null){
            recentpuzzlecards[i].classList = 'card card-puzzle ' + rdata[i];
        } else {
            if(i == 0){
                var currobject = recentpuzzlecards[i];
                while(currobject.getAttribute("name") != 'recentpuzzlesection'){
                    currobject = currobject.parentElement;
                }
                currobject.style.display = 'none';
            } else {
                recentpuzzlecards[i].style.display = 'none';
            }
        }
    }

}
// function setRecentsText(){
//     switch()
//     packinfo = 
//     r1kids = recent1.children;
//     for(let i = 0; i < r1kids.length; i ++){
//         if(r1kids[i].name == "packname"){

//         }
//     }
// }