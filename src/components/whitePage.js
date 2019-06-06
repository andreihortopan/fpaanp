import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import ReactTooltip from 'react-tooltip'

export const MENU_MARGIN = 20
export const MENU_PADDING = 20
export const CONTENT_WIDTH = 800

const diffWidth = 2 * MENU_MARGIN
const diffHeight = 2 * MENU_MARGIN

export class WhitePage extends Component {
    static showFooter = true

    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    hideFooter = () => {
        WhitePage.showFooter = false
        console.log(WhitePage.showFooter)
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

    handleOnClick = () => {
        ReactTooltip.hide()
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
            width: this.state.width,
            height: '100%',
            overflow: 'hidden',
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
                    {this.props.type == 1 && <div style={{
                        maxWidth: CONTENT_WIDTH,
                        display: 'inline-block',
                        textAlign: 'center',
                    }}>
                        <Link to='/date-si-resurse'>
                            <div data-tip='Înapoi'
                                onClick={this.handleOnClick}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    marginTop: MENU_MARGIN + MENU_PADDING,
                                    marginRight: MENU_MARGIN + MENU_PADDING,
                                }}>
                                <svg
                                    onClick={this.goHome}
                                    width={40}
                                    height={20}
                                    style={{
                                        fill: '#bcbcbc'
                                    }}
                                >
                                    <path width={40} d={'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'} />
                                </svg>
                            </div>
                        </Link>

                        {this.props.children}
                    </div>}
                    {this.props.type == 0 && this.props.children}
                </div>
                {WhitePage.showFooter && <div
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
                        position: 'relative',
                        zIndex: 200
                    }}>
                    <p>
                        Platforma Finanțarea publică a activităților nonprofit este dezvoltată de către Asociația Centrul pentru Legislație Nonprofit în cadrul proiectului ”Îmbunătățirea cadrului juridic privind finanțarea publică a organizațiilor neguvernamentale”.
                        <br />
                        Proiect finanțat cu sprijinul Fondului Social European prin Programul Operațional Capacitate Administrativă. Conținutul acestei platforme reflectă numai punctul de vedere al Asociației CLNR şi Comisia nu este responsabilă pentru informațiile pe care le conține.
                    </p>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        marginTop: 5,
                        marginRight: 5,
                    }}>
                        <a href='#' data-tip='Ascunde disclaimer'>
                            <svg
                                onClick={this.hideFooter}
                                width={20}
                                height={20}
                                style={{
                                    fill: '#bcbcbc'
                                }}
                            >
                                <path d={'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'} />
                            </svg>
                        </a>
                    </div>
                </div>}
            </div>
        )
    }
}

export default WhitePage
