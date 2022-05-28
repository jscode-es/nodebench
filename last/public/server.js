const io = require('socket.io')()

const listener = ({ win }) => {

    io.on('connection', client => {

        console.log('connection')

        client.on('maximize', () => {
            win.maximize()
        })

        client.on('minimize', () => {
            win.minimize()
        })

        client.on('restore', () => {
            win.restore()
        })
    })

    io.listen(3001)
}



module.exports = listener