import React from 'react';

function BtnBlock(props) {

    const handleClear = () => {
        const ctx = props.canRef.current.getContext('2d')
        ctx.clearRect(0, 0, props.canRef.current.width, props.canRef.current.heigth)
    }

    return (
        <div>
            <button onClick={handleClear}>clear</button>
            <button></button>
            <button></button>
        </div>
    )
}

export default BtnBlock