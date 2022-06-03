var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    
    var Usuario = mongoose.model('Usuario');
    passport.use(new GitHubStrategy({
    clientID: '0d574f219f32e7d1022d',
    clientSecret: 'be0669de4c78db73fb30247e7db327f3ba2ca7e9',
    callbackURL: 'https://dswa5-15-ac-pt3008401.herokuapp.com/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            { "login" : profile.username},
            { "nome" : profile.username},
            function(erro, usuario) {
            if(erro){
            console.log(erro);
            return done(erro);
            }
            return done(null, usuario);
            }
        );
    }));
    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });
    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
        .then(function(usuario) {
            done(null, usuario);
        });
    });
};


// be0669de4c78db73fb30247e7db327f3ba2ca7e9