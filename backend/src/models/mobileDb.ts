import * as db from '../config/db'

export const mobileDB = {

    createMobileTable : async () => {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS mobileTable (
                id SERIAL PRIMARY KEY UNIQUE,
                name VARCHAR(20),
                stock INT,
                image VARCHAR,
                description VARCHAR(200)
            );
        `;
    
        try {
            console.log(process.env.DB_HOST)
            await db.query(createTableQuery)
            console.log('Table "mobileTable" created successfully')
        } catch (error) {
            console.error('Error creating table "mobileTable":', error)
            throw error;
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
            throw error;
        }
    },

    getAllMobiles : async () => {
        try{
            const mobiles = await db.query(`select * from mobileTable`)
            return mobiles
        } catch(error) {
            console.error('Error Fetching phone data', error)
            throw error;
        }
    },

    getMobileById : async (id : string) => {
        try{
            const mobile = await db.query('select * from mobileTable where id= $1', [id])
            return mobile
        } catch(error) {
            console.error('Error Fetching phone data', error)
            throw error;
        }
    },

    deleteMobileById: async (id : string) => {

        try{

            const mobile = await db.query("delete from mobileTable where id = $1 returning *", [id])
            return mobile

        } catch (error) {
            console.error('Error deleting Mobile Entry', error)
            throw error;
        }
    },

    updateStock : async (id: string, amount : number) => {
        try {
            // First, fetch the mobile to get its current stock
            const mobile = await db.query('SELECT * FROM mobileTable WHERE id = $1', [id]);
            
            if (mobile.rows.length === 0) {
                throw new Error('Mobile not found');
            }
            
            // Calculate the updated stock
            const updatedStock = mobile.rows[0].stock + amount;
    
            // Update the stock in the database and return the updated row
            const updatedMobile = await db.query(
                'UPDATE mobileTable SET stock = $2 WHERE id = $1 RETURNING *',
                [id, updatedStock]
            );
    
            // Return the updated mobile entry
            return updatedMobile.rows[0];
            
        } catch (error) {
            console.error('Error updating stock:', error);
            throw error; // You can throw the error to be caught by the calling function
        }
    }
}
