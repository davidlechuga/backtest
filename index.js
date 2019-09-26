const server = require ('./server')
const dbConnect = require ('./src/lib/db')


const listenServer = function() {
    return new Promise ((resolve, reject) =>{
        server.listen(8080, () => {
            resolve()
        })
    })
}

async function main () {
	await dbConnect()
	console.log('DB CONNECTED EN MONGODB COMPASS')
	await listenServer()
	console.log('SERVER LISTENING 8080')

}

main ()
.then(() =>{
	console.log('api ready')
})
.catch((error)=>{
	console.error(error)
})