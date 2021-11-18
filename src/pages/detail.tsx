import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Detail() {
    const params = useParams();
    let navigate = useNavigate();
    return (
        <div>
            This is detail page.
            <div>Detail {params.id}</div>
            <button
                onClick={() => {
                    // navigate("/");
                    navigate(-1);
                }}
            >
                Go back
            </button>
        </div>
    );
}

export {Detail};