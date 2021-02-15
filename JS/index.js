$(document).ready(function(){
    var i =0;
    $("#btn").click(function(){
        var request = new XMLHttpRequest();
        request.open('GET',"https://jsonplaceholder.typicode.com/posts");
        request.onload = function(){
            var data=JSON.parse(request.responseText);
            load(data);
            
        };
        
        request.send();
    })
    $(document).on('click',".del", function(){
       var x=this.id;
       
        $("#"+x).remove();
        $(this).remove();
  
    });
        
    
    $("#btn_1").click(function(){
        
        $("p").hide();
        $(".del").remove();
        
    });
    
});
function load(data){
   
    for(i=0;i<data.length;i++){
        
        $('#content').append("<p id='p_"+i+"'><span><b>User Id : </b>" + data[i].userId +"</span><br> <span><b>Id : </b>" +data[i].id+ "</span><br><span><b>Title : </b>"+data[i].title+" </span><br><span><b>Body : </b>"+data[i].body+"</span><br></p> " )
        $('#content').append("<button id='p_"+i+"' class='del'>Delete</button>");
        
    }
    
    
}





