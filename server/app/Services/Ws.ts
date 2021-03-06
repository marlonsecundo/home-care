import socketIo from 'socket.io';
import Server from '@ioc:Adonis/Core/Server';

class Ws {
  public isReady = false;
  public io: socketIo.Server;

  public start(callback: (socket: socketIo.Socket) => void) {
    this.io = new socketIo.Server(Server.instance!);
    this.io.on('connection', callback);

    this.isReady = true;
  }
}

export default new Ws();
