import React, { Component } from 'react';
import { menuLook } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuFP extends Component {
  render() {
    return (
        <div style={{
            marginLeft: -20,
        }}>
            <div style={{
                ...menuLook,
                marginLeft: 20,
            }}>
                <ul style={{
                    ...listStyle,
                }}>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a>Legea 350/2005</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a>Legea 34/1998</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a>Legea 98/2016 (art. 56, 112)</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default SubmenuFP;