import express from 'express';
import { Pool } from 'pg';

const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const pool = new Pool({
    connectionString: 'postgresql://postgres.xtwhfksurddqencrmhtl:Student@info12@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    ssl: {
        rejectUnauthorized: false // Required for Heroku
    }
   
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Connected to DB');
});




