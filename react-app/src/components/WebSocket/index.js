import React, { createContext } from 'react'
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { updateChatLog } from './actions';

const WS_BASE = process.env.REACT_APP_BASE_URL;

const WebSocketContext = createContext(null)

export { WebSocketContext }

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (sensor, message) => {
        const payload = {
            sensor: sensor,
            data: message
        }
        socket.emit("event://send-message", JSON.stringify(payload));
        dispatch(updateChatLog(payload));
    }

    if (!socket) {
        socket = io.connect(WS_BASE)

        socket.on("event://get-message", (msg) => {
            const payload = JSON.parse(msg);
            dispatch(updateChatLog(payload));
        })

        ws = {
            socket: socket,
            sendMessage
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}
