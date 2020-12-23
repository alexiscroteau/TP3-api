const Settings = require('./settingsSchema');

const generate = async() => {
    const settings = await Settings.find();
    if(settings[0] == null) {
        const defaultSettings = new Settings({
            maxAttempts: 10,
            attemptDelay: 500,
            blockAccess: false,
            passwordChange: false,
            minPasswordLength: 6,
            requiresCaps: false,
            requiresNumber: true,
            requiresSpecial: false,
        });
        await defaultSettings.save();
    }
}

export default {
    generate
};

