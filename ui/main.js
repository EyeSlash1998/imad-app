//Code Button

var button= document.getElementById('counter');

button.onclick= function() {
    //Create Request Object
    var request= new XMLHttpRequest();
    
    //capture the response and store in the variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
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
//submit name
var nameInp=document.getElementById('name');
var name=nameInp.value;
var submit=document.getElementById('submit_btn');
submmit.onclick= function() {
  var names=['name1', 'name2' ,'name3', 'name4'];
  var list='';
  for(var i=0;i< name.length;i++)
      list+='<li>'+names[i]+'</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
};
