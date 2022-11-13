// Create component to ws socket connect and listen to events

import { useEffect, useState } from "react";
import io from "socket.io-client";

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io(url, {});
    setSocket(socket);

    return () => {
      socket.close();
    };
  }, [url]);

  return socket;
};
