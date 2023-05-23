import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to={'/allComponents'} className="btn btn-secondary">Go to Dash</Link>
        </div>
    )
}

export default Main