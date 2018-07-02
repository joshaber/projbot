const {createProbot} = require('probot')

const main = app => {
  console.log('here!')

  // app.on("pull_request.opened", async context => {
  //   console.log(`hey there ${context}`)
  //   app.log(`hey there ${context}!!`)
  // })
}

exports.main = (req, res) => {
  console.log('hey there!')
  console.log(createProbot)
  res.send('cool')
}
