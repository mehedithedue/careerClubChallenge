
    function firstFactorial(num){

        if(num == 1){
            return 1;
            
        }

        return num * firstFactorial(num -1)
    }



    function showResult(){

        var inputValue = document.querySelector('input#inputNumber').value;

        document.querySelector('span#recursionResult').innerHTML = firstFactorial(inputValue);
    }

    

    document.getElementById("calculateRecursion").addEventListener("click", showResult, false);