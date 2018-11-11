import React, { Component } from 'react';
import { menuLook } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuE extends Component {
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
                    <a>Calendar</a>
                </li>
                <li style={{
                    ...itemStyle
                }}>
                    <a>Lista evenimente</a>
                </li>
            </ul>
            </div>
        </div>
    );
  }
}

export default SubmenuE;