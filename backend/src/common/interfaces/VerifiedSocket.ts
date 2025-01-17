import SocketIO from 'socket.io';

export interface VerifiedSocket extends SocketIO.Socket {
    user?: any;
}
