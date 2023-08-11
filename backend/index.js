import './database/database.js'
import app from './app.js'

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));