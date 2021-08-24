var score_user = 0;
var score_computer = 0;
var bat = 1;
var computer_selection;
var bowling;
var toss_val=2;
// result = document.getElementsById('decision');
batting_display = document.getElementById('batting_display');
bowling_display = document.getElementById('bowling_display');
score_display = document.getElementById('score_display');

function toss(id) {
    if(toss_val=2)
    {
        if (Math.floor(Math.random() * 2) == id) {
            select.style.display = "grid";
        }
        else {
            computer_bat.innerHTML = "computer chose bowling, you are batting";
            bat = 1;
            toss_val = 1;
        }
    }
}
function decide(id) {
    if(toss_val=2){
        if (id == 0) {
            console.log('batting');
            bat = 1;
            toss_val = 1;
            decision.innerHTML="you choose batting";
        }
        else {
            console.log('bowling')
            bat = 1;
            toss_val = 0;
            decision.innerHTML="you choose bowling";
        }
    }
}


function batting(id) {
    if (toss_val = 1) {
        if (bat == 1) {
            computer_bowling = computer();
            if (computer_bowling === id) {
                console.log('out')
                console.log('batting over your score is:', score_user)
                target.innerHTML = "target:"+score_user;
                bat--;
                score_display.innerHTML = "score :" + score_user;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_bowling;
            }
            else {
                score_user += id;
                score_display.innerHTML = "score :" + score_user;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_bowling;
            }
        }
        else {
            computer_batting = computer();
            if (computer_batting == id) {
                // console.log(score_computer, "   ", score_user)
                console.log('u win')
                win_lose.innerHTML = "You win";
                score_display.innerHTML = "score :" + score_computer;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_batting;
            }
            else {
                score_computer += id;
                score_display.innerHTML = "score :" + score_computer;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_batting;
                if (score_user < score_computer) {
                    console.log('u lose')
                    win_lose.innerHTML = "You lose";
                    score_display.innerHTML = "score :" + score_computer;
                    batting_display.innerHTML = "run :" + id;
                    bowling_display.innerHTML = "bowling :" + computer_batting;
                }

                
            }
        }
    }
    if (toss_val = 0) {
        if (bat == 1) {
            computer_batting = computer();
            if (computer_batting === id) {
                console.log('out')
                console.log('batting over computer score is:', score_computer)
                bat--;
                target.innerHTML = "target:"+score_computer;
                score_display.innerHTML = "target :" + score_computer;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_batting;
            }
            else {
                score_computer+= id;
                score_display.innerHTML = "score :" + score_computer;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_batting;
            }

        }
        else {
            computer_bowling = computer();
            if (computer_bowling === id) {
                // console.log(score_computer, "   ", score_user)
                console.log('u lose')
                win_lose.innerHTML = "You lose";
                score_display.innerHTML = "score :" + score_user;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_bowling;
            }
            else {
                score_user += id;
                score_display.innerHTML = "score :" + score_user;
                batting_display.innerHTML = "run :" + id;
                bowling_display.innerHTML = "bowling :" + computer_bowling;
                if (score_user > score_computer) {
                    console.log('u win')
                    win_lose.innerHTML = "You win";
                    score_display.innerHTML = "score :" + score_user;
                    batting_display.innerHTML = "run :" + id;
                    bowling_display.innerHTML = "bowling :" + computer_bowling;
                }
            }
        }
    }
}


function computer() {
    computer_selection = Math.floor(Math.random() * 7);
    while (computer_selection == 0) {
        computer_selection = Math.floor(Math.random() * 7);
    }
    return computer_selection;
}