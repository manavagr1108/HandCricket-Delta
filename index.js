var score_user = 0;
var score_computer = 0;
var bat=1;
var computer_selection;
var bowling;

result= document.getElementsByClassName('decision');
// select= document.getElementsByClassName('select');
batting_display= document.getElementById('batting_display');
bowling_display= document.getElementById('bowling_display');
score_display= document.getElementById('score_display');

function toss(id) {
    if(Math.floor(Math.random()*2)==id) {
        select.style.display= "grid";
    }
    else
    {
        computer_bat.innerHTML="computer chose bowling, you are batting";
    }
}
function decide(id) {
    if(id==0) {
        console.log('batting')
    }
    else
    {
        console.log('bowling')
    }
}


function batting(id)
{
   if(bat==1)
   {
    computer_bowling = computer();
    if(computer_bowling == id) 
    {
        console.log('out')
        console.log('batting over your score is:',score_user)
        bat--;
        score_display.innerHTML = "batting :" + score_user;
        batting_display.innerHTML = "batting :" + id;
        bowling_display.innerHTML = "bowling :" + computer_bowling;
    }
    else{
        score_user+=id;
        score_display.innerHTML = "batting :" + score_user;
        batting_display.innerHTML = "batting :" + id;
        bowling_display.innerHTML = "bowling :" + computer_bowling;
    }
   }
   else{
     computer_batting= computer();
     if(score_user<score_computer)
     {
         console.log('u lose')
     }
    else if(computer_batting == id) 
    {
        console.log(score_computer,"   ",score_user)
        console.log('u win')
    }
    else{
        score_computer+=id;
    }
   }
}


function computer(){
    computer_selection = Math.floor(Math.random()*7);
    while(computer_selection==0)
    {
        computer_selection = Math.floor(Math.random()*7);
    }
    return computer_selection;
}