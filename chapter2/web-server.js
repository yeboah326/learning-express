const http = require("http")

function requestHandler(request, response){
    if (request.url){
        switch (request.url) {
            case "/":
                console.log(`URL ${request.url} -> Home`)
                response.end("Home")
                break;
            case "/about":
                console.log(`URL ${request.url} -> About`)
                response.end("About")
                break
            case "/sign-in":
                console.log(`URL ${request.url} -> Sign In`)
                response.end("Sign In")
                break
            default:
                console.log(`URL ${request.url} -> Unregistered`)
                break;
        }
    }
}

const server = http.createServer(requestHandler);

server.listen(3000);