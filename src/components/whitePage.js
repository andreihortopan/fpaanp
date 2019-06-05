import React, { Component } from 'react'

export const MENU_MARGIN = 20
export const MENU_PADDING = 20

const menuLook = {
    backgroundColor: '#FFFFFF',
    borderRadius: '2px',
    boxShadow: '1px 1px 4px 1px #bababa',
    padding: MENU_PADDING,
    paddingBottom: MENU_PADDING / 2,
    paddingTop: MENU_PADDING / 2
}

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: 'scroll',
    overflowX: 'hidden'
}

const diffWidth = 2 * MENU_MARGIN + 2 * MENU_PADDING
const diffHeight = 2 * MENU_MARGIN + MENU_PADDING

export class WhitePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        }
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth - diffWidth,
                height: window.innerHeight - diffHeight
            }
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <div
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    ...pageStyle,
                    ...menuLook,
                    textAlign: 'center',
                    paddingTop: 20,
                }}
            >
                <div style={{
                    display: 'inline-block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 'auto'
                }}>
                    {this.props.children}
                </div>
                <div>
                    <p>
                        Platforma Finanțarea publică a activităților nonprofit este dezvoltată de către Asociația Centrul pentru Legislație Nonprofit în cadrul proiectului ”Îmbunătățirea cadrului juridic privind finanțarea publică a organizațiilor neguvernamentale” și este finanșat cu sprijinul Fondului Social European prin Programul Operațional Capacitate Administrativă.
                        <br />
                        Conținutul acestei platforme reflectă numai punctul de vedere al Asociației Centrul pentru Legislație Nonprofit şi Comisia nu este responsabilă pentru informațiile pe care le conține.
                    </p>
                </div>
            </div>
        )
    }
}

export default WhitePage
