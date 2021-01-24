//console.log("Script is working");

function calculatetips(){
    // Get the values entered by the users
    var amt = document.getElementById("amt").value;
    var persons = document.getElementById("pers").value;
    var service = document.getElementById("service").value;  
    
    // Validate the input by the user

    if(amt === "" || amt < 0){
        alert("Enter the correct amount value");
        return;
    }
     if( persons === "" || persons < 0){
        alert("Enter the number of person sharing the bill");
        return;
    }

    // Validate the type of service

    if(service == 0){
        alert("Please select the type of service");
        return;
    }
    // Calculating the tip

    var tips = (amt*service)/persons;
   
    // Displaying the tip amount per person

    var tipp = document.createElement("p");
    tipp.innerText = "The tip for each person is: " + tips;
    document.getElementById("tip").appendChild(tipp);


   


}