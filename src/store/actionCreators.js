import {
  HANDER_ALL,
  HANDER_FINSHED,
  HANDER_NOT_FINSHED,
  HANDER_INPUT_CHANGE,
  HANDER_INPUT_ADD,
} from './actionTypes'

export const handerAll = (args) => ({
  type: HANDER_ALL,
  ...args
})
export const handerFinshed = (args) => ({
  type: HANDER_FINSHED,
  ...args
})
export const handerNotFinshed = (args) => ({
  type: HANDER_NOT_FINSHED,
  ...args
})
export const handerInputChange = (args) => ({
  type: HANDER_INPUT_CHANGE,
  ...args
})
export const handerAdd = (args) => ({
  type: HANDER_INPUT_ADD,
  ...args
})