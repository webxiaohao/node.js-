const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request,response)=>{
    const method = request.method
    const url = request.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //设置返回格式为json
    response.setHeader('Content-type','application/json')

    //返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }
    //返回
    if(method == 'GET'){
        response.end(
            JSON.stringify(resData)
        )
    }

    if(method == 'POST'){
        let postData = ''
        request.on('data',chunk=>{
            postData += chunk.toString()
        })
        request.on('end',()=>{
            resData.postData = postData
            //返回
            response.end(
                JSON.stringify(resData)
            )
        })
    }
    

})
server.listen(7070)
console.log('7070端口 ok')