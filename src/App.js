import React from "react";
import Chat from "./components/Chat/Chat";
import Rooms from "./components/Rooms/Rooms";
// import "./initMicCap";

export default function App() {
  return (
    <div className="App">
      <Rooms />
      <Chat roomName="PAC MAN" />
    </div>
  );
}
