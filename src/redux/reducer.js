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
      return {
        ...state,
        list: [...value],
        inputValue: ''
      }
    default:
      return state
  }
}