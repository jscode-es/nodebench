import socketio from 'socket.io-client'
const SOCKET_URL = 'http://localhost:3001'

const socket = () => {
    global.ws = socketio.connect(SOCKET_URL)
    return global.ws
}

export default socket