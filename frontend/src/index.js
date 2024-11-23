import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

import './styles/global.css';
import "./i18n"

import './styles/themes/light-theme.css';
import './styles/themes/dark-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);