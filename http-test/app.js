const http = require('http')
// const querystring = require('querystring')//nodejs处理get请求

// const server = http.createServer((req,res)=>{
//     console.log('method',req.method) //GET


//     const url = req.url
//     console.log('url:',url)

//     req.query = querystring.parse(url.split('?')[1])
//     console.log('req.query',req.query)

//     res.end(
//         JSON.stringify(req.query)
//     )
// })


const server = http.createServer((req,res)=>{//node 处理 post请求
    if(req.method === 'POST'){

        //req 数据格式
        console.log('req content-type',req.headers['content-type'])

        //接受数据
        let postData = ''
        req.on('data',chunk =>{
            postData += chunk.toString()
        })
        req.on('end',()=>{
            console.log('postDataa',postData)
            res.end('hello world!')
        })

    }

})

server.listen(1010)
console.log('ok')