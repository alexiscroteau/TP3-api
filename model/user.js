import bcrypt from 'bcrypt'

const User = require('./userSchema');

const generate = async() => {
    const users = await User.find();
    if(users[0] == null)
    {
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash("Administrateur", salt);
        let user = new User({
            username: "Administrateur", 
            password: hashedPassword,
            email: "admin@admin.com",
            name: "Hinn-Ystrater",
            firstname: "Adem",
            birthdate: "2012-12-12",
            role: "Administrateur"
        });
        await user.save();

        salt = await bcrypt.genSalt();
        hashedPassword = await bcrypt.hash("Utilisateur1", salt);
        user = new User({
            username: "Utilisateur1", 
            password: hashedPassword,
            email: "utilisateur_01@gmail.com",
            name: "Tremblay",
            firstname: "Jean",
            birthdate: "1959-11-05",
            role: "Préposé aux clients résidentiels"
        })
        await user.save();

        salt = await bcrypt.genSalt();
        hashedPassword = await bcrypt.hash("Utilisateur2", salt);
        user = new User({
            username: "Utilisateur2", 
            password: hashedPassword,
            email: "utilisateur_02@gmail.com",
            name: "Quatorze",
            firstname: "Louis",
            birthdate: "1638-09-05",
            role: "Préposé aux clients d'affaire"
        })
        await user.save();
    }
}

export default {
    generate
};