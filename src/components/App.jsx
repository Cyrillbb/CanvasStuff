import React from 'react';
import BtnBlock from './BtnBlock/BtnBlock';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: [],
            drawing: false
        }
        this.canRef = React.createRef()
    }
    handleMouseMove = (e) => {
        if (this.state.drawing) {
            const canCoords = this.canRef.current.getBoundingClientRect()
            const ctx = this.canRef.current.getContext('2d')
            ctx.strokeStyle = 'blue'
            ctx.beginPath()
            ctx.moveTo(this.state.coords[0] - canCoords.x, this.state.coords[1])
            ctx.lineTo(e.clientX - canCoords.x, e.clientY)
            this.setState({coords: [e.clientX, e.clientY]})
            ctx.lineWidth = 1
            ctx.stroke()
            
        }
    }
    handleDraw = () => {
        this.setState({ coords: [], drawing: false })
    }

    render() {
        return (
            <div >
                <canvas
                    onMouseDown={e => this.setState({ coords: [e.clientX, e.clientY], drawing: true })}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handleDraw}
                    style={{ backgroundColor: 'black', margin: '0 auto' }}
                    width='600'
                    height='600'
                    ref={this.canRef}
                > </canvas>
                <BtnBlock canRef={this.canRef} />
            </div>
        )
    }
}

export default App