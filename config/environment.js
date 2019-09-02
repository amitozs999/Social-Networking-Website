const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: 'mvc_app',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        }
    },
    clientID: '', 
    clientSecret: '',
    callbackURL: "http://localhost:8010/user/auth/google/callback",
    jwt_secret: 'mywebsocial',
}


const production =  {
    name: 'production'
}


module.exports = development;
