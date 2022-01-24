let turn = "X"
let gameover =false;
let width = screen.width;
//Function to change player turn

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//function to cehck winning condition

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let box = document.getElementsByClassName("box");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    if(gameover == false){
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
                boxtext[e[1]].innerText !== "") {
                    document.querySelector('.info').innerText = "Player " + (turn == 'X' ? 1 : 2) + " WON!!!!"
                    gameover = true;
                    if(width>1200){
                        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                    } else if(width > 1020){
                        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "120px";
                    }
                    else if(width > 800){
                        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "81px";
                    } else {
                        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "81px";
                    }
                    
                    box[e[1]].style.backgroundColor = "#f38068"
                    box[e[0]].style.backgroundColor = "#f38068"
                    box[e[2]].style.backgroundColor = "#f38068"
            }
        })
    }

    
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            
            checkWin();
            turn = changeTurn();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Player " + (turn == 'X' ? 1 : 2) + " turn";
            }
            
        }
    })
    element.addEventListener('touchend', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            checkWin();
            turn = changeTurn();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Player " + (turn == 'X' ? 1 : 2) + " turn";
            }
        }
    })
})




reset.addEventListener('click',()=>{
    
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Player " + (turn == 'X' ? 1 : 2) + " turn";
    gameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = "transparent"
    })
})

reset.addEventListener('touchend',()=>{
    
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Player " + (turn == 'X' ? 1 : 2) + " turn";
    gameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = "transparent"
    })
})