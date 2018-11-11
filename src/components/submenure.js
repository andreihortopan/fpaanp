import React, { Component } from 'react';
import { menuLook } from './menu';
import { listStyle } from './menu';
import { itemStyle } from './menu';
import { changeCanvas } from './canvas';
import { resetGraphMenuState } from './graphmenu';

export class SubmenuRE extends Component {
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
                        <a onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Membri</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Calendar</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Activitati Retea</a>
                    </li>
                    <li style={{
                        ...itemStyle
                    }}>
                        <a onClick={(e) => {
                            changeCanvas("Membri");
                            resetGraphMenuState();
                        }}>Noutati</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default SubmenuRE;