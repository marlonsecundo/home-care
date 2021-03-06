import Event from '@ioc:Adonis/Core/Event';

Event.on('new:oxygenation-log', 'PatientLog.handleNewOxigenation');
Event.on('new:heartbeat-log', 'PatientLog.handleNewHeartbeat');
