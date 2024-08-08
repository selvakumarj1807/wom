import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './backToTop.css';
function BackToTop() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            });
        };
    }, [scroll]);

    const backToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Link to="" onClick={backToTop} className={`back-to-top d-flex align-items-center justify-content-center a ${scroll > 100 ? 'active' : undefined}`}>
            <i className="bi bi-arrow-up-short"></i>
        </Link>
    )
}

export default BackToTop