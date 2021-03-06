import { io, Socket } from 'socket.io-client';

export const OXIGENTATION_SOCKET_URL = 'new:oxygenation-log';
export const HEARTBEAT_SOCKET_URL = 'new:heartbeat-log';

const SocketService = () => {
  let socketIo: Socket | null = io();
  let isReady = false;
  const connect = () => {
    socketIo = io('http://192.168.0.8:3333/', {
      transports: ['websocket'],
    });

    socketIo.on('connect', (socket: any) => {
      isReady = true;
    });
  };

  return { connect, isReady, socketIo };
};

export default SocketService();
