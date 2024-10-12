import * as db from '../config/db'

export const mobileDB = {

    createMobileTable : async () => {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS mobileTable (
                id SERIAL PRIMARY KEY,
                name VARCHAR(20),
                stock INT,
                image VARCHAR(50),
                description VARCHAR(200)
            );
        `;
    
        try {
            await db.query(createTableQuery)
            console.log('Table "mobileTable" created successfully')
        } catch (error) {
            console.error('Error creating table "mobileTable":', error)
        }
    },

    createMobileEntry: async (name : string, stock : Number, image: string, description: string) => {

        try{
            const response = await db.query(`INSERT INTO mobileTable 
                (name, stock, image, description) values
                ($1, $2, $3, $4) Returning *`, 
                [name, stock, image, description])
            console.log('Mobile entry created:', response);  // Log the newly inserted entry
            return response.rows[0];
        } catch (error) {
            console.error('Error inserting mobile entry:', error);
        }
    }
}
