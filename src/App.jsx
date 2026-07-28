import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Header from './components/Layout/Header';
import SplitLayout from './components/Layout/SplitLayout';
import './styles/global.css';

function App() {
  return (
    <ResumeProvider>
      <div className="app">
        <Header />
        <SplitLayout />
      </div>
    </ResumeProvider>
  );
}

export default App;
