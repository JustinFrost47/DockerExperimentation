import {Pool} from 'pg'
import { env } from 'process'

const pool = new Pool({
    connectionString: env.POSTGRES_CONNECTION_STRING
})

export const query = async (text : string , values? : any[]) => {
    
    const response = await pool.query(text, values)
    return response
}