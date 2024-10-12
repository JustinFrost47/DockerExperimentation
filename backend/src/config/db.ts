import { Pool } from 'pg'



  const pool = new Pool({
      connectionString: process.env.POSTGRES_CONNECTION_STRING
  });

export const query = async (text: string, values?: any[]) => {
    try {
        const response = await pool.query(text, values)
        return response
    } catch (err) {
        console.error('Database query error:', err)
        throw err
    }
}
