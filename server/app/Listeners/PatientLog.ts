import { EventsList } from '@ioc:Adonis/Core/Event';
import Ws from 'App/Services/Ws';

export default class PatientLog {
  public async handleNewOxigenation(log: EventsList['new:oxygenation-log']) {
    Ws.io.emit('new:oxygenation-log', log);
  }

  public async handleNewHeartbeat(log: EventsList['new:heartbeat-log']) {
    Ws.io.emit('new:heartbeat-log', log);
  }
}
