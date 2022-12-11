import question from './question'

// Image url processing
question.forEach((item) => {
  item.images && item.images.forEach((img, i) => (item.images[i].url = import.meta.env.BASE_URL + img.url))
  item.list && item.list.forEach((listItem) => (listItem.image &&= import.meta.env.BASE_URL + listItem.image))
})

export default {
  Default_ID: question[0].id,
  ...question.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {}),
}
