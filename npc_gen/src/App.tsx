import React, { FC } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NPCDashboard } from './components/NPCDashboard/NPCDashboard';
import { DNDSearchPage } from './components/DNDSearchPage/DNDSearchPage';

export const App:FC = () => {
  return (
    <>
      <NPCDashboard />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/search' element={<DNDSearchPage />} />
      </Routes>
    </>
  );
}
