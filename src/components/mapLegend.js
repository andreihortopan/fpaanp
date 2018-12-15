import React, { Component } from 'react'
import '../legend.css'
import Popup from 'react-popup'

export class MapLegend extends Component {
  handlePopupClick = () => {
    Popup.create({
      title: 'Cum se citează',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut lacinia mi, ut eleifend purus. Suspendisse odio risus, mollis eu est et, efficitur dapibus dolor. Suspendisse a dignissim nunc, sit amet hendrerit lacus. Curabitur semper nunc nec dictum dictum. In eleifend interdum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing.',
      buttons: {
        left: [
          {
            text: 'Închide',
            className: 'danger',
            action: function () {
              Popup.close()
            }
          }
        ],
        right: [
          {
            text: 'Copiază',
            action: function () {
              var textArea = document.createElement('textarea')
              textArea.value =
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut lacinia mi, ut eleifend purus. Suspendisse odio risus, mollis eu est et, efficitur dapibus dolor. Suspendisse a dignissim nunc, sit amet hendrerit lacus. Curabitur semper nunc nec dictum dictum. In eleifend interdum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing.'
              document.body.appendChild(textArea)
              textArea.focus()
              textArea.select()

              try {
                var successful = document.execCommand('copy')
                var msg = successful ? 'successful' : 'unsuccessful'
                console.log('Fallback: Copying text command was ' + msg)
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err)
              }

              document.body.removeChild(textArea)
            }
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className='my-legend'>
        {/* <div className='legend-source'>Suma totală acoperă toți anii, toate domeniile si toate legislațiile pentru fiecare județ</div> */}
        <div className='legend-title'>Suma totală per județ (RON)</div>
        <div className='legend-scale'>
          <ul className='legend-labels'>
            <li>
              <span style={{ background: '#F1EEF6' }} />
              2,000,000
            </li>
            <li>
              <span style={{ background: '#BDC9E1' }} />
              5,000,000
            </li>
            <li>
              <span style={{ background: '#74A9CF' }} />
              10,000,000
            </li>
            <li>
              <span style={{ background: '#2B8CBE' }} />
              20,000,000
            </li>
            <li>
              <span style={{ background: '#045A8D' }} />
              50,000,000
            </li>
          </ul>
        </div>
        <div className='legend-source'>
          <span style={{ cursor: 'pointer' }} onClick={this.handlePopupClick}>
            Cum se citează
          </span>
        </div>
      </div>
    )
  }
}

export default MapLegend
