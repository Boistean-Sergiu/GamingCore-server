// Npm and others

const jwtPassport = require('passport-jwt')
const mongoose = require('mongoose')

// Other files import 

const keys = require('./keys')

// Model import

const User = mongoose.model('users')

// Needed data extraction

const jwtStrategy = jwtPassport.Strategy
const jwtExtract = jwtPassport.ExtractJwt

const opts = {}
opts.jwtFromRequest = jwtExtract.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = passport => {
  passport
    .use(new jwtStrategy(opts, (jwt_payload, done) => {
      User
        .findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch(err => console.log(err))
    }))
}