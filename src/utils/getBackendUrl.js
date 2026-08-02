export const getBackendUrl = () => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        return 'http://localhost:3000';
    }
    return process.env.REACT_APP_SECRET_KEY || 'https://sigma-backend-s4pg.onrender.com';
};
