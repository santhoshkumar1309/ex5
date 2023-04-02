const http= require('http');
url=require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var q=url.parse(req.url,true).query;
    console.log(q);
    console.log(q.l1);
    console.log(q.b1);
    var a = Number(q.l1);
    var b = Number(q.b1);
    var area = a*b;
    res.write("Area of the Rectangle is "+area);
    res.end();

}).listen(8000);