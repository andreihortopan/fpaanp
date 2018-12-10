import React, { Component } from 'react';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { listStyle } from './menu';
import { itemStyle } from './menu';
import { changeCanvas } from './canvas';
import { resetGraphMenuState } from './graphmenu';

export class SubmenuRE extends Component {
  render() {
    return (
            <div style={{
                ...menuLook,
                marginLeft: -MENU_MARGIN,
                backgroundColor: "#008ece",
                color: "#ffffff",
                boxShadow: "1px 1px 4px 1px #848484",
            }}>
                <ul style={{
                    ...listStyle,
                }}>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" onClick={(e) => {
                            changeCanvas("Members");
                            resetGraphMenuState();
                        }}>Membri</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" onClick={(e) => {
                            changeCanvas("Members");
                            resetGraphMenuState();
                        }}>Activit&#259;&#355;i Re&#355;ea</a>
                    </li>
                </ul>
            </div>
    );
  }
}

export default SubmenuRE;