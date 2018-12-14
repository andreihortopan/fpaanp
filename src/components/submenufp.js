import React, { Component } from 'react';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuFP extends Component {
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
                        <a href="#" >Legea 350/2005</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" >Legea 34/1998</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a href="#" >Legea 98/2016 (art. 56, 112)</a>
                    </li>
                </ul>
            </div>
    );
  }
}

export default SubmenuFP;