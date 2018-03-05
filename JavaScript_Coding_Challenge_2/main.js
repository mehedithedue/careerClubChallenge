
    function printFullAge(personArray){
        var ageArray = [];
        var resultBoolArr = [];
        var i = 0;
        var thisYear = new Date().getFullYear();
        personArray.forEach(function(birthYear) {
            ageArray[i++] = thisYear - birthYear;
        });
       var j = 0;
       ageArray.forEach(function( singleAge) {
           resultBoolArr[j++] = (singleAge >= 18) ? true : false;
       });

       return resultBoolArr;
    };

    var personYearArr1 = [1987, 1985, 1967, 1972, 2001, 1982];
    var personYearArr2 = [1957, 1930, 2005, 1992, 1991, 2003];

    var full_1 = printFullAge(personYearArr1);    
    var full_2 = printFullAge(personYearArr2);
    
    console.log(full_1);
    console.log(full_2);
