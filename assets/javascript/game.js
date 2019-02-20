
$(document).ready(function() {

    var wins= 0;
    var loss= 0
    var userAmount= 0


    //Set the variables for each crystal 

    var a=0;
    var b=0;
    var c=0;
    var d=0;
    
    //random number, will add to it


    //Crystal numbers
    var randomNumber;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    

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
        var f=a+b+c+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++;
            userAmount++;
         

        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--;
            userAmount--;
           
        }
    });

    $('#btn2').click(function(){
        b = b+crystal2;
        var f=b+a+c+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++;
            
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--;
        }
    });

    $('#btn3').click(function(){
        c = c+crystal3;
        var f=c+a+b+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++;
            
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--;
        }
    });

    $('#btn4').click(function(){
        d = d+crystal4;
        var f=d+a+b+c;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++;
            
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--;
        }
    });

// Pseudocoding this part //

//This is suppose to reset the game//
    $("#reset").click(function(){
        randomNumber="";
        $('#scoreboard,#sum').empty()
    });

// I need the game to reset on its own and for the score to appear//

});