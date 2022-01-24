let turn = "X"
let gameover =false;
//Function to change player turn

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//function to cehck winning condition

const checkWin = () => {
    let boxetext = document.getElementsByClassName("boxtext");
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

    wins.forEach(e => {
        if ((boxetext[e[0]].innerText === boxetext[e[1]].innerText) &&
            (boxetext[e[1]].innerText === boxetext[e[2]].innerText) &&
            boxetext[e[1]].innerText !== "") {
                document.querySelector('.info').innerText = "Player " + (turn == 'X' ? 1 : 2) + " WON!!!!"
                gameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
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
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Player " + (turn == 'X' ? 1 : 2) + " turn";
        }
    })
})