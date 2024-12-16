import App from './app.js';
import 'dotenv/config.js';

const PORT = process.env.PORT || 3000;
    
App.listen(PORT, () => {
    console.log(
        `Express server listening on localhost port ${PORT}`
    );
});