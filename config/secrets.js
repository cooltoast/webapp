module.exports = {
  db: process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
 'localhost',

  facebook: {
    clientID: '255207834648507',
    clientSecret: 'f1cfb92d04f8bcccb7abda7b0eec5be6',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

};
