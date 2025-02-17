// Server start karega aur port listen karega 
import app from './app.js'
import {port} from './configs/config.js'
import connectDB from './configs/db.config.js';

connectDB().then(() => {
    console.log("Db Connected");
    
    app.listen(port, () => {
        console.log("Server running on port" + port);
    })
    
})
