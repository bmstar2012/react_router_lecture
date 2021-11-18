import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>This is homepage.</h1>
            <div>
                <div>
                    <Link to="/detail/1">Detail 1</Link>
                </div>
                <div>
                    <Link to="/detail/2">Detail 2</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export {Home};