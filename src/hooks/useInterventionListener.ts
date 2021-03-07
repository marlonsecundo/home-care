import React, { useCallback, useEffect, useState } from 'react';
import socketService, {
  HEARTBEAT_SOCKET_URL,
  INTERVENTION_SOCKET_URL,
  OXIGENTATION_SOCKET_URL,
} from '../services/socket.service';
import { PatientLog, PatientLogType, Profile, Status } from '../types/models';

function useInterventionListener(
  defaultValue: boolean,
  userId: number
): boolean {
  const [intervention, setIntervention] = useState<boolean>(defaultValue);

  const onReceiveData = useCallback((socketData: Profile) => {
    console.log({ socketData });
    setIntervention(socketData.intervention);
  }, []);

  useEffect(() => {
    let url = INTERVENTION_SOCKET_URL;

    socketService.connect().then(() => {
      socketService.socketIo.on(url + userId, onReceiveData);
    });

    // Dispose
    return () => {
      socketService.socketIo.off(url + userId, onReceiveData);
    };
  }, []);

  return intervention;
}

export default useInterventionListener;
