var turn = "x"
var head = document.querySelector(".head")
var squares = []
function show(num1, num2, num3) {
    head.innerHTML = `${squares[num1]} WINNER `
    document.getElementById("box" + num1).style.background = "rgb(1, 78, 78)"
    document.getElementById("box" + num2).style.background = "rgb(1, 78, 78)"
    document.getElementById("box" + num3).style.background = "rgb(1, 78, 78)"

    setInterval(function () {
        document.body.style.background = "white"
        head.innerHTML += "."

    }, 1000)
    setTimeout(function () {
        location.reload()
    }, 4400)
}
function winner() {
    for (var i = 1; i < 10; i++) {
        squares[i] = document.getElementById("box" + i).innerHTML
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        show(1, 2, 3)
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        show(4, 5, 6)
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        show(7, 8, 9)
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        show(1, 4, 7)
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        show(2, 5, 8)
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        show(3, 6, 9)
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        show(1, 5, 9)
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        show(3, 5, 7)
    }
}
function game(id) {
    var element = document.getElementById(id)
    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "X"
        turn = "o"
        head.innerHTML = "O TURN"
    }
    else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "O"
        turn = "x"
        head.innerHTML = "X TURN"
    }
    winner()
}