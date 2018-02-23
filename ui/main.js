//Code Button

var button= document.getElementById('counter');
var counter=0;

button.onclick= function() {
    //Make a request to the counter
    
    //capture the response and store in the variable
    
    //render the variable in the the correct span
    
    counter++;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}