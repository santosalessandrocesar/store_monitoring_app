import React from 'react';

interface StoreStatusProps {
    storeId: string;
}

const StoreStatus: React.FC<StoreStatusProps> = ({ storeId }) => {
    return (
        <div>
            <p>Status da Loja: {storeId}</p>
        </div>
    );
};

export default StoreStatus;