import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
    const navigate = useNavigate(); // React Router's hook for navigation
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    useEffect(() => {
        // If the token is not present, redirect to the /home page
        if (!token) {
            navigate('/home');
        }
    }, [navigate, token]); // Re-run this effect if navigate or token changes
};

export default useAuthRedirect;