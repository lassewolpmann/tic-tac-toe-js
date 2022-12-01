window.onload = (event) => {
    const fieldList = document.getElementsByClassName('field');
    const currentPlayer = document.getElementById('current-player');
    const resetButton = document.getElementById('reset');

    // add EventListener to every field
    for (let i = 0; i < fieldList.length; i++) {
        fieldList[i].addEventListener('mousedown', () => {
            // place mark in selected field
            placeMark(i)

            // check for win
            checkForWin()
        })
    }

    // add EventListener to reset button
    resetButton.addEventListener('mousedown', () => {
        resetField()
    })

    function placeMark(i) {
        if (currentPlayer.className === 'player-x') {
            fieldList[i].innerHTML = 'X'

            currentPlayer.classList.replace('player-x', 'player-o');
            currentPlayer.innerHTML = 'Player O'
        } else {
            fieldList[i].innerHTML = 'O'

            currentPlayer.classList.replace('player-o', 'player-x');
            currentPlayer.innerHTML = 'Player X'
        }

        fieldList[i].disabled = true;
    }

    function resetField() {
        if (currentPlayer.className === 'player-o') {
            currentPlayer.classList.replace('player-o', 'player-x');
            currentPlayer.innerHTML = 'Player X'
        }

        for (let i = 0; i < fieldList.length; i++) {
            fieldList[i].innerHTML = ''
            fieldList[i].disabled = false;
        }
    }

    function checkForWin() {
        let allMarks = []

        for (let i = 0; i < fieldList.length; i++) {
            allMarks.push(fieldList[i].innerHTML)
            // check for horizontal win
            if (i === 0 || i === 3 || i === 6) {
                let horizontalList = [fieldList[i].innerHTML, fieldList[i + 1].innerHTML, fieldList[i + 2].innerHTML];
                countMarks(horizontalList);
            }

            // check for vertical win
            if (i === 0 || i === 1 || i === 2) {
                let verticalList = [fieldList[i].innerHTML, fieldList[i + 3].innerHTML, fieldList[i + 6].innerHTML];
                countMarks(verticalList);
            }

            // check for diagonal win
            if (i === 0 || i === 2) {
                if (i === 0) {
                    let diagonalList = [fieldList[i].innerHTML, fieldList[i + 4].innerHTML, fieldList[i + 8].innerHTML];
                    countMarks(diagonalList);
                } else {
                    let diagonalList = [fieldList[i].innerHTML, fieldList[i + 2].innerHTML, fieldList[i + 4].innerHTML];
                    countMarks(diagonalList);
                }
            }
        }

        const emptyFields = allMarks.filter(x => x === '').length;
        if (emptyFields === 0) {
            alert('No winner!')

            resetField()
        }
    }

    function countMarks(markList) {
        const xCount = markList.filter(x => x === 'X').length;
        const oCount = markList.filter(x => x === 'O').length;

        if (xCount === 3 || oCount === 3) {
            celebrateWinner()
        }
    }

    function celebrateWinner() {
        if (currentPlayer.innerHTML === 'Player X') {
            alert('Player O won!')
        } else {
            alert('Player X won!')
        }

        resetField()
    }
};

