import React, { Component } from 'react';
import { menuLook } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuE extends Component {
  render() {
    return (
        <div style={{
            ...menuLook,
        }}>
        <ul style={{
            ...listStyle,
        }}>
            <li style={{
                ...itemStyle
            }}>
                <a>Calendar</a>
            </li>
            <li style={{
                ...itemStyle
            }}>
                <a>Lista evenimente</a>
            </li>
        </ul>
        </div>
    );
  }
}

export default SubmenuE;