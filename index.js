window.onload = (event) => {
    const fieldList = document.getElementsByClassName('field');
    const currentPlayer = document.getElementById('current-player');

    for (let i = 0; i < fieldList.length; i++) {
        fieldList[i].addEventListener('mousedown', () => {

            if (currentPlayer.className === 'player-1') {
                currentPlayer.classList.replace('player-1', 'player-2');
                currentPlayer.innerHTML = 'Player 2'
                fieldList[i].innerHTML = 'X'
            } else {
                currentPlayer.classList.replace('player-2', 'player-1');
                currentPlayer.innerHTML = 'Player 1'
                fieldList[i].innerHTML = 'O'
            }
        })
    }
};
