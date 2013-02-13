"use strict"

express = require "express"
hulk = require "hulk-hogan"

app = express.createServer express.logger(), express.cookieParser()

app.configure ->
  app.use express.static "#{__dirname}/public"
  app.set "views", "#{__dirname}/views"
  app.set "view options", layout: false
  app.set "view engine", "html"
  app.register ".html", hulk

app.error (e, req, res, next) ->
  console.log e
  res.send "what are you doing?"

app.get "/*", (req, res, next) ->
  res.render (req.params[0] or "index").replace "..", ""


app.listen process.env.PORT or 3650, -> console.log "it's on"

module.exports = app
