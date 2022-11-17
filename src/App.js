import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { RoomData } from "./UserContext";
import './App.css';

export default function App() {
  return (
    <div className="App">
        <RoomData>
          <Dashboard />
        </RoomData>
      </div>
  );
}
