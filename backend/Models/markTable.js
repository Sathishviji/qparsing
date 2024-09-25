import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: 'postgresql://postgres.xtwhfksurddqencrmhtl:Student@info12@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    ssl: {
        rejectUnauthorized: false // Required for Heroku
    }
   
})


async function createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS subject (
            id SERIAL,
            register_number VARCHAR(100) NOT NULL,
            serial_test VARCHAR(30) NOT NULL,
            subject VARCHAR(100) NOT NULL,
            co1 VARCHAR(100) NOT NULL,
            co2 VARCHAR(100) NOT NULL,
            co3 VARCHAR(100) NOT NULL,
            co4 VARCHAR(100) NOT NULL,
            co5 VARCHAR(100) NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (register_number) REFERENCES student(register_number)
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