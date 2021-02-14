$(document).ready(function(){
    $("#btn").click(function(){
        var request = new XMLHttpRequest();
        request.open('GET',"https://jsonplaceholder.typicode.com/posts");
        request.onload = function(){
            var data=JSON.parse(request.responseText);
            load(data);
        };
        request.send();
    })
});
function load(data){
   
    for(i=0;i<data.length;i++){
        $('#content').append("<p><span><b>User Id : </b>" + data[i].userId +"</span><br> <span><b>Id : </b>" +data[i].id+ "</span><br><span><b>Title : </b>"+data[i].title+" </span><br><span><b>Body : </b>"+data[i].body+"</span><br></p>" )
    }
    
}



