import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainAppComponent from './MainApp'; // Certifique-se de que o caminho está correto
import Info from './info/info'; // Certifique-se de que o caminho está correto

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainAppComponent />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
}

export default App;
