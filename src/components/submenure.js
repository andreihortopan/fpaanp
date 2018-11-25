import React, { Component } from 'react';
import { menuLook, MENU_MARGIN } from './menu';
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
                color: "#ffffff"
            }}>
                <ul style={{
                    ...listStyle,
                }}>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Membri</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Activit&#259;&#355;i Re&#355;ea</a>
                    </li>
                </ul>
            </div>
    );
  }
}

export default SubmenuRE;