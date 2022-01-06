//get the values from the page
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById('endValue').value;

    //parse into integers 
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //
    if (Number.isInteger(startValue)&& Number.isInteger(endValue)){
            //call generateNumebrs
            let numbers= generateNumbers(startValue, endValue);
            //call displayNumbers
            displayNumbers(numbers);
    }else{
        alert('You must enter integers')
    }

   

}

//generate numbers from start value to end value
//logic function/s
function generateNumbers(sValue, eValue){
    let numbers=[];
    // all numbers from start to end]
    //index= index+1 (eaqual index++/index--)
    for(let index = sValue; index <= eValue; index++){
        // this execute in a loop until index=eValue
        numbers.push(index);
    }
    return numbers;
}


//display numbers and mark even bold
//display or view functions
function displayNumbers(numbers){
    let templateRows="";
    for (let index = 0; index < numbers.length; index++) {
        let className="even";
        let number = numbers[index];
        if(number %2 == 0){
            className="even";
        }
        else{
            className="odd";
        }

        templateRows += `<tr><td class="${className}" >${number}</td></tr>1`;
        
    }
    document.getElementById("results").innerHTML=templateRows;
}