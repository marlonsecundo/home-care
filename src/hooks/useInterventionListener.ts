import React, { useCallback, useEffect, useState } from 'react';
import socketService, {
  INTERVENTION_SOCKET_URL,
} from '../services/socket.service';
import { Profile } from '../types/models';

function useInterventionListener(
  defaultValue: boolean,
  userId: number
): boolean {
  const [intervention, setIntervention] = useState<boolean>(defaultValue);

  const onReceiveData = useCallback((socketData: Profile) => {
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
