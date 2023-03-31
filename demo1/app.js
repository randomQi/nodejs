// const { read } = require('fs');
var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/')


/* http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"Content-type":"texl/html;charset='utf-8'"})
    res.write("成功")
    res.end()
    
}).listen(8080) */

const url=require("url")
  api="http://www.baidu.com?kw=nihao"
  console.log(url.parse(api,true))
  console.log(url.parse(api).query)


  var http = require('http');
  http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
  }).listen(8081);
  
  console.log('Server running at http://127.0.0.1:8081/');


    beforeAll(() => {
      
    })

    test('', () => {
      let obj = { a: '1' }
      expect(obj).toEqual({ a: '1' })
    })