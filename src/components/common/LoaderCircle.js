import React from 'react';
import { Circles } from "react-loader-spinner";

function LoaderCircle() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Circles
                height="80"
                width="80"
                color="#7b09e7"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default LoaderCircle;
