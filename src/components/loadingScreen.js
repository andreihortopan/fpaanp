import React, { Component } from 'react'
import { setOpacity } from './sidemenu'

export class LoadingScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        })
    }

    componentDidMount() {
        setOpacity(0)
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        setOpacity(1)
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <div
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    display: "table",
                    padding: 0,
                    margin: 0,
                    overflow: 'hidden',
                    textAlign: "center",
                }}
            >
                <div style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                    margin: "auto",
                }}>
                    <h1>SE ÎNCARCĂ...</h1>
                </div>
            </div>
        )
    }

}

export default LoadingScreen;