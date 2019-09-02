const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: '',
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
    clientSecret: ,
    callbackURL: "http://localhost:8010/user/auth/google/callback",
    jwt_secret: 'mywebsocial',
}


const production =  {
    name: 'production',
    asset_path: process.env.MY_ASSET_PATH,
    session_cookie_key: process.env.MY_SESSION_COOKIE_KEY,
    db: process.env.MY_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MY_GMAIL_USERNAME,
            pass: process.env.MY_GMAIL_PASSWORD
        }
    },
    clientID: process.env.MY_GOOGLE_CLIENT_ID,
    clientSecret: process.env.MY_GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.MY_GOOGLE_CALLBACK_URL,
    jwt_secret: 'websocial',
    
    
   
}
// $env:MY_JWT_SECRET2="mywebsocial1" from powershell in admin



module.exports = development;