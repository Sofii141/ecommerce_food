import {connect} from 'mongoose'
import dotenv from 'dotenv'
dotenv.config(); 

(async () => {
    try {
        const db = await connect(process.env.MONGODB_URL);
        console.log(`DATABASE: ${db.connection.name}`);
    } catch (err) {
        console.log(`ERROR TO CONNECT DATABASE: ${err}`);
    }
})(); 

