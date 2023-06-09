let fields = [];
let gameOver = false;
let currentShape = 'cross';
let moves = 0;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        };
        fields[id] = currentShape;
        moves++;
        draw();
        checkForwin();
    };
};


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle')
            document.getElementById(`circle-${i}`).classList.remove('d-none');

        if (fields[i] == 'cross')
            document.getElementById(`cross-${i}`).classList.remove('d-none');
    };
};


function checkForwin() {
    let winner;

    winner = checkHorizontalLines(winner);
    winner = checkVerticalLines(winner);
    winner = checkDiagonalLines(winner);

    if (winner) {
        setGameOver();
    };

    if (moves == 9) {
        setGameOver();
    }
};


function checkHorizontalLines(winner) {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    };

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    };

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    };

    return winner;
};


function checkVerticalLines(winner) {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    };

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    };

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    };

    return winner;
};


function checkDiagonalLines(winner) {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.2)';
    };

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    };

    return winner;
};


function setGameOver() {
    gameOver = true;
    setTimeout(function () {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('btn-restart').classList.remove('d-none');
    }, 850);
};


function restart() {
    gameOver = false;
    moves = 0;
    fields = [];
    currentShape = 'cross';
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('btn-restart').classList.add('d-none');
    document.getElementById('player-1').classList.remove('player-inactive');
    document.getElementById('player-2').classList.add('player-inactive');

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    };

    resetLineStyle();
};


function resetLineStyle() {
    document.getElementById('line-1').style = "top: 15%; left: 10%";
    document.getElementById('line-2').style = "top: 48%; left: 10%";
    document.getElementById('line-3').style = "top: 82%; left: 10%";
    document.getElementById('line-4').style = "top: 48%; left: 10.5%";
    document.getElementById('line-5').style = "top: 48%; left: -24%";
    document.getElementById('line-6').style = "top: 48%; left: 44%";
    document.getElementById('line-7').style = "top: 49%; left: 10%; transform: rotate(45deg) scaleX(0.0)";
    document.getElementById('line-8').style = "top: 49%; left: 10%; transform: rotate(-45deg) scaleX(0.0)";
};