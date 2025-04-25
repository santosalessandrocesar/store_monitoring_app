export interface Store {
    id: string;
    name: string;
    status: 'online' | 'offline';
    lastChecked: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user';
}