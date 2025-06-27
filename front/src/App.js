import React from 'react';
import { Routes, Route } from 'react-router';
import { Dashboard } from './Views/Dashboard';
import { Box } from '@mui/material';
import './App.css';
import { AppSidebar } from './Components/Sidebar';
import { AppHeader } from './Components/Header';
import { IngredientsPage } from './Views/Ingredients';

function App() {
  return (
    <div className="App" style={{width: '100vw', height: '100vh'}}>
      {false && <AppSidebar />}
      {false && <AppHeader />}
      <Box sx={{width: 'calc(100% - 0px)', height: 'calc(100% - 64px)', marginLeft: '0px'}}>
        <Dashboard />
        <Routes>
          <Route index element={<Dashboard />} path="/dashboard"></Route>
          <Route element={<Dashboard />} path="/dishes"></Route>
          <Route element={<IngredientsPage />} path="/ingredients"></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
