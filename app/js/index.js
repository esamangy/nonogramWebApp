//html must inlcude globals.js

//these are for the recent packs
var recentpackcards = [document.getElementById('recentpack1'), 
                document.getElementById('recentpack2'),
                document.getElementById('recentpack3'),
                document.getElementById('recentpack4')];


var recentpuzzlecards = [document.getElementById('recentpuzzle1'), 
                document.getElementById('recentpuzzle2'),
                document.getElementById('recentpuzzle3'),
                document.getElementById('recentpuzzle4'),
                document.getElementById('recentpuzzle5'),
                document.getElementById('recentpuzzle6'),
                document.getElementById('recentpuzzle7'),
                document.getElementById('recentpuzzle8')];

function indexLoad(){
    loadRecentPacks();
    loadRecentPuzzles();
    setRecentPacks();
    setRecentPuzzles();
    resetRecentPackCardText();
}

function setRecentPacks(){
    for(let i = 0; i < recentpackdata.length; i ++){
        if(recentpackdata[i] == 'undefined' || recentpackdata[i] == 'null' || recentpackdata[i] == null){
            if(i == 0){
                var currobject = recentpackcards[i];
                while(currobject.getAttribute("name") != 'recentpacksection'){
                    currobject = currobject.parentElement;
                }
                currobject.style.display = 'none';
            } else {
                recentpackcards[i].style.display = 'none';
            }
        } else {
            recentpackcards[i].classList = 'card ' + recentpackdata[i];
        }
    }
}
//"card card-puzzle card-puzzle-easy"
function setRecentPuzzles(){
    for(let i = 0; i < recentpuzzledata.length; i ++){
        if(recentpuzzledata[i] == null || recentpuzzledata[i] == 'null' || recentpuzzledata[i] == 'undefined'){
            if(i == 0){
                var currobject = recentpuzzlecards[i];
                while(currobject.getAttribute("name") != 'recentpuzzlesection'){
                    currobject = currobject.parentElement;
                }
                currobject.style.display = 'none';
            } else {
                recentpuzzlecards[i].style.display = 'none';
            }
        } else {
            recentpuzzlecards[i].classList = 'card card-puzzle ' + rdata[i];
        }
    }
}


function resetRecentPackCardText(){
    for(let i = 0; i < recentpackcards.length; i ++){
        //get all elements to change their text
        let card = recentpackcards[i];
        let children = card.children;
        let allchildren = [];
        for(let i = 0; i < children.length; i ++){
            let temp = children[i].children;
            for(let j = 0; j < temp.length; j ++){
                allchildren[allchildren.length] = temp[j];
            }
        }
        allchildren[allchildren.length] = children[children.length - 1];
        let image, packname, progress, streak;
        for(let i = 0; i < allchildren.length; i ++){
            if(allchildren[i].getAttribute("name") == "image"){
                image = allchildren[i];
            }
            else if(allchildren[i].getAttribute("name") == "packname"){
                packname = allchildren[i];
            }
            else if(allchildren[i].getAttribute("name") == "progress"){
                progress = allchildren[i];
            }
            else if(allchildren[i].getAttribute("name") == "streak"){
                streak = allchildren[i];
            }
        }
        let link = card;
        while(link.getAttribute("name") != 'link'){
            link = link.parentElement;
        }

        //set all elements text
        if(recentpackdata[i] == packs.spring){
            image.src = "images/SpringIconSmall.png";
            packname.innerHTML = "Spring Pack";
            progress.innerHTML = "1%";
            streak.innerHTML = "1 Day Streak";
            link.setAttribute("href", "app/pages/springpack.html");
        }
        else if(recentpackdata[i] == packs.summer){
            image.src = "images/SummerIconSmall.png";
            packname.innerHTML = "Summer Pack";
            progress.innerHTML = "5%";
            streak.innerHTML = "2 Day Streak";
            link.setAttribute("href", "app/pages/summerpack.html");
        }
        else if(recentpackdata[i] == packs.fall){
            image.src = "images/FallIconSmall.png";
            packname.innerHTML = "Fall Pack";
            progress.innerHTML = "20%";
            streak.innerHTML = "3 Day Streak";
            link.setAttribute("href", "app/pages/fallpack.html");
        }
        else if(recentpackdata[i] == packs.winter){
            image.src = "images/WinterIconSmall.png";
            packname.innerHTML = "Winter Pack";
            progress.innerHTML = "50%";
            streak.innerHTML = "5 Day Streak";
            link.setAttribute("href", "app/pages/winterpack.html");
        }
        else if(recentpackdata[i] == packs.test){
            image.src = "images/TestIconSmall.png";
            packname.innerHTML = "Test Pack";
            progress.innerHTML = "-100%";
            streak.innerHTML = "100000000 Day Streak";
            link.setAttribute("href", "app/pages/testpack.html");
        }

    }
    
}