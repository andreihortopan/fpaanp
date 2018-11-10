import React, { Component } from 'react';
import { menuLook } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';

export class SubmenuRE extends Component {
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
                <a>Membri</a>
            </li>
            <li style={{
                ...itemStyle
            }}>
                <a>Calendar</a>
            </li>
            <li style={{
                ...itemStyle
            }}>
                <a>Activitati Retea</a>
            </li>
            <li style={{
                ...itemStyle
            }}>
                <a>Noutati</a>
            </li>
        </ul>
        </div>
    );
  }
}

export default SubmenuRE;