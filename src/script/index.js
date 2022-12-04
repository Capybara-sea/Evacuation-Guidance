import question from './question'

export default {
  Default_ID: question[0].id,
  ...question.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {}),
}
