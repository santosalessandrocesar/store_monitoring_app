import React, { useState, useEffect } from 'react';
import StoreStatus from '../components/StoreStatus';

interface Store {
    id: string;
    name: string;
    url: string;
}

const Dashboard: React.FC = () => {
    const [stores, setStores] = useState<Store[]>([]);

    useEffect(() => {
        // Simulação de chamada à API
        fetch('http://localhost:5000/api/stores')
            .then((response) => response.json())
            .then((data) => setStores(data))
            .catch((error) => console.error('Error fetching stores:', error));
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {stores.map((store) => (
                    <StoreStatus key={store.id} storeId={store.id} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;