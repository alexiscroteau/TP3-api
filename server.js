require('dotenv').config();
import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './router.js'
import game from "./model/game"
import user from "./model/user"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import settings from "./model/settings";
import residential from "./model/residential"
import business from "./model/business"

const User = require('./model/userSchema');
const Settings = require('./model/settingsSchema');
const Residential = require('./model/residentialSchema');
const Business = require('./model/businessSchema');

//Initialisation de l'application
const app = express();


const PORT = 3000;
const JWT_SECRET = "supersecretphrasetocreatethetokensignature";
const DB_URL = 'mongodb://localhost/mydb';

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true,});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connecté à la BD'));

//Requêtes par page

//=========================================================================================================
//PAGE INSCRIPTION
//=========================================================================================================
app.post('/register', async (req, res) => {
  try{
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    User.init().then(async function(){
      try{
        const user = new User({
          username: req.body.username, 
          password: hashedPassword,
          email: req.body.email,
          name: req.body.name,
          firstname: req.body.firstname,
          birthdate: req.body.birthdate,
          role: "Member"
        })
        
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch(e){
        res.status(409).send('User already exists');
      }
    });
  }
  catch (e){
    res.status(500).json({ message: e.message });
  }
})

//=========================================================================================================
//PAGE CONNEXION
//=========================================================================================================
app.post('/login', async (req,res) => {
  let qusername;
  let qpassword;
  let qrole;
  let userExists = true;
  await User.find({username: req.body.username}, (err,user) => {
    if (user[0] == null){
      res.status(400).send('User not found');
      userExists = false;
    }
    else {
      qusername = user[0].username;
      qpassword = user[0].password;
      qrole = user[0].role;
    }
  });

  if(userExists)
  {
    try{
      const user = { username: qusername, password: qpassword, role: qrole};
      await bcrypt.compare(req.body.password, user.password, (err,result) => {
        if(err){
          res.status(500).send(err.message);
        }
        if(result){
          const accessToken = jwt.sign(user, JWT_SECRET, { expiresIn: 300}, (err, accessToken) => {
            if(err) {
              res.status(500).send(err.message);
            }
          
            res.status(200).send(accessToken);
          });
        }
        else {
          res.status(401).send('Wrong password');
        }
      });
    }
    catch(e) {
      console.log(e);
      res.status(500).json({ message: e.message });
    }
  }
});

//=========================================================================================================
//PAGE PROFILE
//=========================================================================================================
app.get('/profile/me', authenticateToken, async (req, res) => {

  jwt.verify(req.token, JWT_SECRET, async (err, authData) => {
    if(err) {
      res.sendStatus(403);
    }
    else {
      try {
        await User.find({username: authData.username}, (err,user) => {
          if(user[0]) {
            const profile = {
              username: user[0].username,
              email: user[0].email,
              name: user[0].name,
              firstname: user[0].firstname,
              birthdate: user[0].birthdate,
              role: user[0].role
            }

            res.status(200).json(profile);
          }
        })
      } catch(err) {
        res.status(500).send(err.message);
      }
    }
  })
});

//=========================================================================================================
//PAGE ADMIN
//=========================================================================================================
app.get('/admin', authenticateToken, async (req, res) => {
  jwt.verify(req.token, JWT_SECRET, async (err, authData) => {
    if(err || authData.role !== "Administrateur") {
      res.sendStatus(403);
    }
    else {
      await Settings.find(async(err, settings) => {
        if(err) {
          res.sendStatus(500);
        }
        else {
          res.status(200).json(settings[0]);
        }
      })

    }
  });
});

app.put('/admin', authenticateToken, async (req, res) => {
  jwt.verify(req.token, JWT_SECRET, async (err, authData) => {
    if(err || authData.role !== "Administrateur") {
      res.sendStatus(403);
    }
    else {
      await Settings.find(async(err, settings) => {
        if(err) {
          res.sendStatus(500);
        }
        else {
          console.log(req.body);
          settings[0].maxAttempts = req.body.adminSettings.maxAttempts;
          settings[0].attemptDelay = req.body.adminSettings.attemptDelay;
          settings[0].blockAccess = req.body.adminSettings.blockAccess;
          settings[0].passwordChange = req.body.adminSettings.passwordChange;
          settings[0].minPasswordLength = req.body.adminSettings.minPasswordLength;
          settings[0].requiresCaps = req.body.adminSettings.requiresCaps;
          settings[0].requiresNumber = req.body.adminSettings.requiresNumber;
          settings[0].requiresSpecial = req.body.adminSettings.requiresSpecial;
          
          try {
            await settings[0].save();
            res.status(200).json(settings[0]);
          } catch (e){
            res.status(400).send(e.message)
          }
        }
      })
    }
  });
});

//=========================================================================================================
//PAGE CLIENTS RÉSIDENTIELS
//=========================================================================================================
app.get('/residentiel', authenticateToken, async(req, res) => {
  jwt.verify(req.token, JWT_SECRET, async (err, authData) => {
    if(err || authData.role !== "Administrateur" && authData.role !== "Préposé aux clients résidentiels") {
      res.sendStatus(403);
    }
    else {
      await Residential.find(async(err, residentials) => {
        if(err) {
          res.sendStatus(500);
        }
        else {     
          res.status(200).json(residentials)
        }
      })
    }
  });  
});

//=========================================================================================================
//PAGE CLIENTS D'AFFAIRES
//=========================================================================================================
app.get('/affaires', authenticateToken, async(req, res) => {
  jwt.verify(req.token, JWT_SECRET, async (err, authData) => {
    if(err || authData.role !== "Administrateur" && authData.role !== "Préposé aux clients d'affaire") {
      res.sendStatus(403);
    }
    else {
      await Business.find(async(err, businesses) => {
        if(err) {
          res.sendStatus(500);
        }
        else {     
          res.status(200).json(businesses)
        }
      })
    }
  });  
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if(!authHeader) {
    res.sendStatus(403);
  }
  else
  {
    const authType = authHeader.split(' ')[0];
    const authToken = authHeader.split(' ')[1];

    if(authType != "Bearer" || authToken == null){
      res.sendStatus(403);
    }
    else{
      req.token = authToken;
      next();
    }
  }
}

//Utiliser cette route pour tester le status de l'API
app.get('/', (req, res) => {
  res.send("Server is listening...");
});

//Injecter les routes disponibles
routes(app);

// Si la route n'existe pas, envoyer erreur 404
app.use((req, res) => {
  res.status(404).send({url: `${req.originalUrl} not found`})
});

//Génération de la base de données
settings.generate();
user.generate();
residential.generate();
business.generate();
game.generate()
  .then(() => {
    //Le serveur est prêt à écouter
    app.listen(PORT, () =>
      console.log(`Node server running on ${PORT}!`),
    );
  })
  .catch(() => {
    console.log("Error to generate default game test.")
  });