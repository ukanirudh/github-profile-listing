import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { appRouter } from './utils/routerSetup';

function App() {
  return (
    <div className="App">
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
