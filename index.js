const main = app => {
  app.on("pull_request.opened", async context => {
    console.log(`hey there ${context}`)
    app.log(`hey there ${context}!!`)
  })
}

module.exports.main = main
