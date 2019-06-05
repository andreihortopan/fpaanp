import React, { Component } from 'react'

export const MENU_MARGIN = 20
export const MENU_PADDING = 20
export const CONTENT_WIDTH = 800

const diffWidth = 2 * MENU_MARGIN
const diffHeight = 2 * MENU_MARGIN

export class WhitePage extends Component {
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
                height: window.innerHeight
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
        const menuLook = {
            backgroundColor: '#FFFFFF',
            borderRadius: '2px',
            boxShadow: '1px 1px 4px 1px #bababa',
        }

        const whitePageLook = {
            ...menuLook,
            width: this.state.width - diffWidth,
            display: 'inline-block',
            textAlign: 'center',
            overflowY: 'scroll',
            overflowX: 'hidden',
            margin: MENU_MARGIN,
            paddingTop: MENU_PADDING,
        }

        const blankLook = {
            width: this.state.width - diffWidth,
            overflow: 'hidden',
            margin: MENU_MARGIN,
        }

        let chosenType = (this.props.type == 1) ? whitePageLook : blankLook

        return (
            <div
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    display: 'flex',
                    flexFlow: 'column',
                    // position: 'fixed',
                    overflow: 'hidden',
                }}
            >
                <div style={chosenType}>
                    <div style={{
                        maxWidth: CONTENT_WIDTH,
                        display: 'inline-block',
                        textAlign: 'center',
                    }}>
                        {this.props.children}
                    </div>
                </div>
                <div
                    id="footer"
                    style={{
                        ...menuLook,
                        width: this.state.width - diffWidth - 2 * MENU_PADDING,
                        margin: MENU_MARGIN,
                        paddingLeft: MENU_PADDING,
                        paddingRight: MENU_PADDING,
                        marginTop: 0,
                        fontSize: "0.7em",
                        textAlign: 'center',
                    }}>
                    <p>
                        Platforma Finanțarea publică a activităților nonprofit este dezvoltată de către Asociația Centrul pentru Legislație Nonprofit în cadrul proiectului ”Îmbunătățirea cadrului juridic privind finanțarea publică a organizațiilor neguvernamentale” și este finanțat cu sprijinul Fondului Social European prin Programul Operațional Capacitate Administrativă.
                        <br />
                        Conținutul acestei platforme reflectă numai punctul de vedere al Asociației Centrul pentru Legislație Nonprofit şi Comisia nu este responsabilă pentru informațiile pe care le conține.
                    </p>
                </div>
            </div>
        )
    }
}

export default WhitePage
