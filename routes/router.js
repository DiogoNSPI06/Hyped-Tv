/*
  © HypedGroupCode 2022 - Todos os direitos reservados
*/
const fs = require('fs');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const expressLayouts = require('express-ejs-layouts');
const helmet = require("helmet");
const logger = require('morgan');
const Ddos = require('ddos')
const ddos = new Ddos;

const config = require('./v1/config.json')

///home/runner/HYPED-or-Website

class App {
  constructor() {
    this.app = express()
    this.config = config

    this.setup()
    this.routes()

    console.log(`HPD | App Online`)
  }

  setup() {
    this.app.use(express.json())
    this.app.set('view engine', 'ejs');
    this.app.set('views',"/home/runner/Hyped-or-Tv/public/views/");
    this.app.use(express.static("/home/runner/Hyped-or-Tv/public/static/"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(expressLayouts);
    this.app.use(ddos.express)
    
    this.app.use(cookieParser());
    this.app.use(cookieSession({
      name: 'session',
      keys: [config.cookieToken],
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))

    if(this.config.debug === true) {
      this.app.use(logger('dev'));
    }

    this.app.listen(1337);
  }

  routes() {
    const files = fs.readdirSync(__dirname + '/routing/').filter(file => file.endsWith('.js'));
    for(const file of files) {
      const route = require(__dirname + `/routing/${file}`)

      this.app.use(route.page, new route.Router());
    }
  }
}

module.exports = App;