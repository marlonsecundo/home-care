import { EventsList } from '@ioc:Adonis/Core/Event';
import Ws from 'App/Services/Ws';

export default class Profile {
  public async handleInterventionProfile(profile: EventsList['edit:intervention']) {
    Ws.io.emit('edit:intervention:' + profile.userId, profile);
  }
}
