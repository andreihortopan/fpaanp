import React, { Component } from 'react';
import { menuLook, MENU_MARGIN } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuFP extends Component {
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