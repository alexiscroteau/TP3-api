const Residential = require('./residentialSchema');

const generate = async() => {
    const residential = await Residential.find();
    if(residential[0] == null) {
        let defaultResidential = new Residential({
            name: 'Jimmy Girard-Nault',
            address: '128 boulevard des Saguenéens',
            phone: '418-264-8252'
        });
        await defaultResidential.save();

        defaultResidential = new Residential({
            name: 'Bruno Bouchard',
            address: '555 boul. de l\'Université',
            phone: '418-812-8312'
        });
        await defaultResidential.save();

        defaultResidential = new Residential({
            name: 'Alexis Croteau',
            address: '347 rue des Plaines',
            phone: '450-965-8085'
        });
        await defaultResidential.save();
    }
}

export default {
    generate
};

