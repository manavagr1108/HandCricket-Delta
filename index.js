var score = 0;
var computer_selection;
var bowling;
function batting(id)
{
    bowling = computer();
    console.log(bowling)
    if(bowling == id) 
    {
        console.log('out')
        console.log('batting over your score is:',score)
    }
    else{
        score+=id;
        console.log('score:', score)
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