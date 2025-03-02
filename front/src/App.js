import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Dashboard } from './Views/Dashboard';
import './App.css';
import { AppSidebar } from './Components/Sidebar';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App" style={{width: '100vw', height: '100vh'}}>
      <AppSidebar />
      <Routes>
        <Route index element={<Dashboard />} path="/dashboard"></Route>
        <Route element={<Dashboard />} path="/components"></Route>
      </Routes>
    </div>
  );
}

export default App;
