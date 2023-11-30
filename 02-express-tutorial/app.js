const http = require('http')
const {readFileSync} = require('fs')


// get all files
const homePage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const homeJavaScript = readFileSync('./navbar-app/browser-app.js')
const homeLogo  = readFileSync('./navbar-app/logo.svg')


const server = http.createServer((req,res)=>{
  console.log('user hit the server')
  if (req.url === '/about'){
    
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<p>this is the about page .. thanks for visiting.. will see you soon on the next page</p>')
    
    res.end()
  }
  else if (req.url === '/'){ 

    res.writeHead(200,{'content-type':'text/html'})
    // res.write('<h4> THIS IS THE HOME PAGE</h4>')
    res.write(homePage)
    
    res.end()
  }
  else if (req.url === '/styles.css'){ 

    res.writeHead(200,{'content-type':'text/css'})
    res.write(styles)
    
    res.end()
  }
  else if (req.url === '/logo.svg'){ 

    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeLogo)
    
    res.end()
  }
  else if (req.url === '/browser-app.js'){ 

    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeJavaScript)
    
    res.end()
  }
  else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h4> THIS IS doesnt exist</h4>')
    res.end()
  
  }
})

server.listen(5000)





