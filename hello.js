var http=require("http");
var express=require("express");
var fs=require("fs");
http.createServer(function (req,res){
    res.writeHead(200,{'content-Type':'html'});
    for(var i=0;i<=10;i++)
    {
        res.write(meetup("firebase","hello","23","d1"));
    }
    res.end();
}).listen(8081);
function meetup(title,text,date,venue,time)
{
   return  " <div class='meetup'  style='overflow:hidden;background: rgb(255, 255, 255);width: 60%;margin: auto;margin-top: 20px;box-shadow: 10px 10px 10px 10px rgb(179, 179, 179);border-radius: 10px 10px 10px 10px;padding: 10px 10px 10px 10px;'>"+
     "<div class='title1' style='font-size:29px;'>"+title+"</div>"+
     "<div class='text' style='margin-left:5px;text-align:center' >"+text+"</div>"+
    "<div class='date'><i class='fa fa-calendar' style='color:blue' ></i> &nbsp;"+date+"</div>"+
     "<div class='location'><i class='fa fa-map-marker' style='color:red'></i> &nbsp;&nbsp;"+venue+"</div>"+
    "<div class='time'><i class='fa fa-clock-o' style='color:green'></i>&nbsp; "+time+"</div>"+
     "<div style='padding:3px;overflow:hidden'><div class='edit'  ><i class='fa fa-edit'></i> Edit</div></div><br/>"+
     "<div style='padding:3px;overflow:hidden'><div class='delete'  ><i class='fa fa-trash'></i> Delete </div></div>"+
     "</div>";
}