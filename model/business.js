const Business = require('./businessSchema');

const generate = async() => {
    const businesses = await Business.find();
    if(businesses[0] == null) {
        let defaultBusiness = new Business({
            companyName: 'Jeux vidéo Hytech',
            address: '335 rue Racine',
            phone: '418-864-8251'
        });
        await defaultBusiness.save();

        defaultBusiness = new Business({
            companyName: 'Le Quotidien',
            address: '1080 boulevard Tablot',
            phone: '418-812-8371'
        });
        await defaultBusiness.save();

        defaultBusiness = new Business({
            companyName: 'Bar le Versus (RIP)',
            address: '123 rue Racine',
            phone: '418-848-1251'
        });
        await defaultBusiness.save();
    }
}

export default {
    generate
};

