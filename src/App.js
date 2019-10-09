import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './app.css'
import { handerAll, handerFinshed, handerNotFinshed, handerInputChange, handerAdd } from './store/actionCreators'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butList: [
        {
          text: '全部',
          id: 0
        },
        {
          text: '完成',
          id: 1
        },
        {
          text: '未完成',
          id: 2
        },
      ],
      inputValue: ''
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
  }
  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.props.handerInputAdd(this.state.inputValue)
      this.setState({ inputValue: '' });
    }
  }
  handerInput = (e) => {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }
  render() {
    const { tabStatus, listItems, inputChange, handerFilter } = this.props;
    let filterItems = [];
    switch (tabStatus) {
      case 1: {
        filterItems = listItems.filter((item) => !!item.checked)
        break;
      }
      case 2: {
        filterItems = listItems.filter((item) => !item.checked)
        break;
      }
      default: {
        filterItems = listItems
      }
    }


    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.handerInput(e)} />
        <ul>
          <TransitionGroup>
            {
              filterItems.map((item, idx) => {
                return (
                  <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                  >
                    <li><label><input type="checkbox" value={item.checked} checked={item.checked} onChange={(e) => { inputChange(item.id, e) }} /><span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span></label></li>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <div onClick={handerFilter}>
          {
            this.state.butList.map((btnItem) => <button style={{ color: btnItem.id === tabStatus ? 'red' : 'black' }} key={btnItem.id} index={btnItem.id} >{btnItem.text}</button>)
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { lists: listItems, tabStatus } = state.Test;
  return {
    listItems: listItems,
    tabStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(id, e) {
      const value = e.target.value;
      dispatch(handerInputChange({ value, id }))
    },
    handerFilter(e) {
      switch (e.target.getAttribute('index') * 1) {
        case 1: dispatch(handerFinshed()); break;
        case 2: dispatch(handerNotFinshed()); break;
        default: dispatch(handerAll()); break;
      }
    },
    handerInputAdd(value) {
      dispatch(handerAdd({ value }))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


