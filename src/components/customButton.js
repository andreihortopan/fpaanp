import React, { Component } from 'react'
import '../customButton.css'

export class CustomButton extends Component {

    getClasses = () => {
        if (this.props.selected == 1 && this.props.wide)
            return 'mySelectedButton wide'
        else if (this.props.selected == 1)
            return 'mySelectedButton'
        else if (this.props.wide)
            return 'myButton wide'
        else
            return 'myButton'
    }

    render() {
        return (
            <a
                style={{ marginRight: 10 }}
                href="#" className={this.getClasses()}
            >
                {this.props.image &&
                    <img
                        src={this.props.image}
                        style={{
                            height: '0.8em',
                            marginRight: 10,
                            //marginLeft: -10
                        }}
                    />
                }
                {this.props.text}
            </a>
        )
    }
}

export default CustomButton
