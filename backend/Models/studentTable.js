import { Pool } from 'pg';

const pool = new Pool({
    connectionString: 'postgresql://postgres.xtwhfksurddqencrmhtl:Student@info12@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    ssl: {
        rejectUnauthorized: false // Required for Heroku
    }
   
})


async function createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS student (
            id SERIAL,
            register_number VARCHAR(100) NOT NULL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            year VARCHAR(100) NOT NULL,
            section VARCHAR(100) NOT NULL
        );
    `;

    try {
        const client = await pool.connect();
        await client.query(query);
        console.log('Table created successfully!');
        client.release();
    } catch (error) {
        console.error('Error creating table:', error.stack);
    } finally {
        await pool.end();
    }
}
createTable();