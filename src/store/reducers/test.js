import { HANDER_ALL, HANDER_FINSHED, HANDER_NOT_FINSHED, HANDER_INPUT_CHANGE, HANDER_INPUT_ADD } from '../actionTypes'

const initState = {
  lists: [
    {
      id: 0,
      checked: false,
      text: '测试文字1111'
    },
    {
      id: 1,
      checked: false,
      text: '测试文字22222'
    },
    {
      id: 2,
      checked: true,
      text: '测试文字33333'
    }
  ],
  tabStatus: 0
}


export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case HANDER_ALL: {
      newState.tabStatus = 0;
      return newState
    }
    case HANDER_FINSHED: {
      newState.tabStatus = 1;
      return newState
    }
    case HANDER_NOT_FINSHED: {
      newState.tabStatus = 2;
      return newState
    }
    case HANDER_INPUT_ADD: {
      newState.lists.unshift({
        id: Math.random(),
        checked: false,
        text: action.value
      })
      return newState
    }
    case HANDER_INPUT_CHANGE: {
      newState.lists.forEach(list => {
        if (action.id === list.id) {
          list.checked = !list.checked
        }
      });
      return newState
    }
    default: { return newState }
  }
}