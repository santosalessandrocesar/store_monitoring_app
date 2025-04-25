import React from 'react';
import UploadCSV from './components/UploadCSV'; // Componente para upload de CSV
import './styles/App.css'; // Estilos globais

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

export default App;