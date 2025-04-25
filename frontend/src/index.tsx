import React from 'react';
import ReactDOM from 'react-dom/client';
import UploadCSV from './components/UploadCSV';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Store Monitoring App</h1>
            </header>
            <main>
                <UploadCSV />
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Removed misplaced JSON content.