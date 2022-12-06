import question from './question'

// Image url processing
question.forEach((item) => {
  item.images &&= item.images.map((img) => import.meta.env.BASE_URL + img)
})

export default {
  Default_ID: question[0].id,
  ...question.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {}),
}
