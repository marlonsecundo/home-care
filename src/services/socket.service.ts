import { io, Socket } from 'socket.io-client';

export const OXIGENTATION_SOCKET_URL = 'new:oxygenation-log:';
export const HEARTBEAT_SOCKET_URL = 'new:heartbeat-log:';

class SocketService {
  public isReady = false;
  public socketIo: Socket = io();

  public connect = () =>
    new Promise<boolean>((resolve, reject) => {
      if (this.isReady) {
        resolve(this.isReady);
        return;
      }

      this.socketIo = io('http://192.168.0.8:3333/', {
        transports: ['websocket'],
      });

      this.socketIo.on('connect', (socket: any) => {
        this.isReady = true;
        resolve(this.isReady);
      });
    });
}

export default new SocketService();
