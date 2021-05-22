import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h2>Page Not Found 404</h2>
            <p>A página procurada não existe</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}

export default NotFound;