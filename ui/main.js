//Code Button

var button= document.getElementById('counter');

button.onclick= function() {
    //Create Request Object
    var request= new XMLHttpRequest();
    
    //capture the response and store in the variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.Done) {
            //Take some action
            if(request.status===200) {
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    //make a request
    
    request.open('GET','http://uchihamadara301198.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
    
};