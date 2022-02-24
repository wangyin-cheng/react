const defaultData = {
  inputValue: '',
  list: [
    '服务1',
    '服务2',
    '服务3'
  ]
}

export default (state = defaultData, { type, value }) => {
  switch(type) {
    case 'changeInput':
      return {
        ...state,
        inputValue: value
      }
    case 'addListItem':
      const list = [...state.list]
      list.push(state.inputValue)
      return {
        ...state,
        list: [...list],
        inputValue: ''
      }
    case 'deleteItem' :
      const delList = [...state.list]
      delList.splice(value, 1)
      return {
        list: [...delList]
      }
    default:
      return state
  }
}
