import React, { useEffect, useState } from 'react'

const Loader = () => {

    const [loader, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        },1500);
    })
    return (
        <>
            {
                loader ? (
                    <div className ="loader_block">
                        <div className="loader"></div>
                    </div>
                ) : (null)
            }
        </>
    )
}

export default Loader; 