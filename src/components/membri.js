import React, { Component } from 'react';
import { Membru } from './membru';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = 2*MENU_MARGIN +2*MENU_PADDING;
const diffHeight = 2*MENU_MARGIN + MENU_PADDING;

export class Membri extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            membri: [
                {
                    id: 0,
                    name: 'POPESCU POP',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 1,
                    name: 'POPESCU ION',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 2,
                    name: 'POPESCU GEORGE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 3,
                    name: 'POPESCU LIVIU',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 4,
                    name: 'POPESCU MARIAN',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 5,
                    name: 'POPESCU ION',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 6,
                    name: 'POPESCU GEORGE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 7,
                    name: 'POPESCU LIVIU',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
                {
                    id: 8,
                    name: 'POPESCU MARIAN',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit magna erat, ac consequat sapien fermentum sed. Morbi id nulla eu augue rutrum vehicula. Duis molestie commodo fermentum. Nullam rhoncus feugiat diam, vitae molestie lacus vulputate vitae. Sed molestie ultricies lobortis. Curabitur consectetur sapien id sapien vulputate interdum. Duis condimentum.',
                },
            ],
        }
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth - diffWidth,
                height: window.innerHeight - diffHeight,
            };
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return(
            <div style={{
                width: this.state.width,
                height: this.state.height,
                ...pageStyle,
                ...menuLook,
            }}>
                <h1 style = {{marginLeft: 40, marginTop: 0}}>MEMBRI</h1>
                <Membru
                    list={this.state.membri}
                />
            </div>
        )
    }
}

export default Membri;