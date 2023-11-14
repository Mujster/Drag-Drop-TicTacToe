var turn=true;
var grid=[[0,0,0],[0,0,0],[0,0,0]];
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var temp=document.getElementById(data);
    var inner=temp.textContent;
    if(turn&&inner=="X"){
       var target = event.target;
       if (target.classList.contains("box")) {
           target.appendChild(document.getElementById(data));
           var boxId=target.id;
           updateGrid(boxId,"X");
           if(checkForWin()){
               var temp=document.querySelector(".popup");
               temp.style.display="flex";
               var load=document.querySelector("#alert");
               load.innerText="Player X wins";
               resetGame();
           }
       } 
       turn=false;
    }
    if(!turn&&inner=="O"){
        var target = event.target;
       if (target.classList.contains("box")) {
           target.appendChild(document.getElementById(data));
           var boxId=target.id;
           updateGrid(boxId,"O");
           if(checkForWin()){
               var temp=document.querySelector(".popup");
               temp.style.display="flex";
               var load=document.querySelector("#alert");
               load.innerText="Player O wins";
               resetGame();
           }
       } 
       turn=true;
    }
}
function reload(){
    location.reload();
}

function updateGrid(id,ch){
    var row, col;
    switch (id) {
        case 'box1': row = 0; col = 0; break;
        case 'box2': row = 0; col = 1; break;
        case 'box3': row = 0; col = 2; break;
        case 'box4': row = 1; col = 0; break;
        case 'box5': row = 1; col = 1; break;
        case 'box6': row = 1; col = 2; break;
        case 'box7': row = 2; col = 0; break;
        case 'box8': row = 2; col = 1; break;
        case 'box9': row = 2; col = 2; break;
    }
    grid[row][col]=ch;
}

function checkForWin(){
    for (var i = 0; i < 3; i++) {
        if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] !== 0) {
            return true;
        }
        if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] !== 0) {
            return true;
        }
    }
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== 0) {
        return true;
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== 0) {
        return true;
    }
    return false;
}
function resetGame() {
    grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    turn = false;
    for (var i = 1; i <= 9; i++) {
        document.getElementById('box' + i).innerText = "";
    }
}