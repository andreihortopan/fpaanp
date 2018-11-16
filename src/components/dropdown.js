import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import onClickOutside from "react-onclickoutside";
import '../css.css';

export class Dropdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        };
    }

    handleClickOutside(e){
        this.setState({
            listOpen: false
        });
    }

    selectItem = (title, id, stateKey) => {
        this.setState({
          headerTitle: <p>{title}</p>,
          listOpen: false
        }, this.props.resetThenSet(id, stateKey))
      }

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    }

    render(){
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        return(
          <div className="dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
                ? <FontAwesome name="angle-up"/>
                : <FontAwesome name="angle-down"/>
            }
          </div>
           {listOpen && <ul className="dd-list">
             {list.map((item) => (
               <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title}</li>
              ))}
            </ul>}
          </div>
        );
      }
}

export default onClickOutside(Dropdown);