import React, { useEffect, useState } from 'react';
import socketService, {
  HEARTBEAT_SOCKET_URL,
  OXIGENTATION_SOCKET_URL,
} from '../services/socket.service';
import { PatientLog, PatientLogType, Status } from '../types/models';

function usePatientLogListener(type: PatientLogType): PatientLog {
  const [patientLog, setPatientLog] = useState<PatientLog>({
    data: 0,
    status: Status.NONE,
    type: PatientLogType.NONE,
    userId: 0,
  });

  useEffect(() => {
    let url = '';

    if (type === PatientLogType.OXYGENATION) {
      url = OXIGENTATION_SOCKET_URL;
    } else if (type === PatientLogType.HEARTBEAT) {
      url = HEARTBEAT_SOCKET_URL;
    }

    if (!socketService.isReady) socketService.connect();

    socketService.socketIo.on(url, (socketData: any) => {
      setPatientLog({
        data: socketData.data,
        type: (<any>PatientLogType)[socketData.type],
        status: (<any>Status)[socketData.status],
        userId: socketData.userId,
      });
    });
  }, []);

  return patientLog;
}

export default usePatientLogListener;
