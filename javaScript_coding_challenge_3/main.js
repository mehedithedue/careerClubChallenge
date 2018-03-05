        var player1 = {};
        player1.roundScore = 0;
        player1.globalScore = 0;
        player1.active = false;

        var player2 = {};
        player2.roundScore = 0;
        player2.globalScore = 0;
        player1.active = true;

        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function switchPlayer(){
            if(player1.active){

                document.getElementById('player1-active').classList.add("label-danger");
                document.getElementById('player2-active').classList.remove("label-danger");
            }else{

                document.getElementById('player2-active').classList.add("label-danger");
                document.getElementById('player1-active').classList.remove("label-danger");
                
            }
        }

        function showHtmlElement(){

            document.getElementById('player1-round-score').innerHTML = player1.roundScore;
            document.getElementById('player2-round-score').innerHTML = player2.roundScore;

            document.getElementById('player1-global-score').innerHTML = player1.globalScore;
            document.getElementById('player2-global-score').innerHTML = player2.globalScore;
        }

        function gameReset(){
            player1.roundScore = 0;
            player1.globalScore = 0;
            player1.active = false;
            player2.roundScore = 0;
            player2.globalScore = 0;
            player1.active = true;
        }

        function checkWinner(){

            if(player1.globalScore > 100){

                document.querySelector("h4#final-score").classList.add("win");
                document.querySelector("h4#final-score").innerHTML = 'Player 1 is won !'
                gameReset();
            }

            if(player2.globalScore > 100){
            
                document.querySelector("h4#final-score").classList.add("win");
                document.querySelector("h4#final-score").innerHTML = 'Player 2 is won !';
                gameReset();
                
            }

        }


        function rollTheDice(){

            if(player1.active){

                player1.roundScore = getRandomInt(1, 6);

                if(player1.roundScore !== 1){

                    
                    player1.globalScore = player1.globalScore + player1.roundScore 
                }else{

                    player1.globalScore = 0
                    player1.active = false;
                    player2.active = true;

                    switchPlayer();
                }

            }else{

                player2.roundScore = getRandomInt(1, 6);

                if(player2.roundScore !== 1){

                    
                    player2.globalScore = player2.globalScore + player2.roundScore 
                }else{

                    player2.globalScore = 0
                    player2.active = false;
                    player1.active = true;

                    switchPlayer();
                }
                
            }
            
            showHtmlElement();
            checkWinner();

        }

        function holdAndSwitch(){

            if(player1.active){

                player1.active = false;
                player2.active = true;
                
            }else{

                player2.active = false;
                player1.active = true;
            }

            switchPlayer();

        }

        showHtmlElement();
        switchPlayer();

        document.querySelector("button#roll-dice").addEventListener("click", rollTheDice, false);

        document.querySelector("button#hold").addEventListener("click", holdAndSwitch, false);