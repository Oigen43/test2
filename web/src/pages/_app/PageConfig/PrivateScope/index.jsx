import { useEffect } from 'react';

import * as socketService from 'services/socket.service';

export default function PrivateScope({ children }) {
  useEffect(() => {
    socketService.connect();

    return () => {
      socketService.disconnect();
    };
  }, []);

  return children;
}
