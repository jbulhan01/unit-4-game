
$(document).ready(function() {

    let wins=0
    let loss=0 

    //Set the variables for each crystal 

    let a=0;
    let b=0;
    let c=0;
    let d=0;
    
    //random number, will add to it


    //Crystal numbers
    let randomNumber;
    let crystal1;
    let crystal2;
    let crystal3;
    let crystal4;
    

    //Crystal generates a number function

    //This creates a new game without reloading page

    function game (){
        crystal1= (Math.floor(Math.random()*(10))+1);
        crystal2= (Math.floor(Math.random()*(10))+1);
        crystal3= (Math.floor(Math.random()*(10))+1);
        crystal4= (Math.floor(Math.random()*(10))+1);
        randomNumber=Math.floor((Math.random()*100)+25);
    }

    game()

    $('#scoreboard').text(randomNumber)

    $('#btn1').click(function(){
        a = a+crystal1;
        let f=a+b+c+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn2').click(function(){
        b = b+crystal2;
        let f=b+a+c+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn3').click(function(){
        c = c+crystal3;
        let f=c+a+b+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn4').click(function(){
        d = d+crystal4;
        let f=d+a+b+c;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

 //This is suppose to reset the game//

    $("#reset").click(function(){
        randomNumber="";
        $('#scoreboard,#sum').empty()
    });

    
});