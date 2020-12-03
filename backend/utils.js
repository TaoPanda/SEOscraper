const { rejects } = require('assert')
const { resolve } = require('path')

function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () =>{
                resolve(body)
            })

        } catch (error) {
            reject(err)
        }
    })
}

module.exports = {
    getPostData
}