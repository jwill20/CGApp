const mysql         =   require('mysql2/promise');
const keyvault      =   require('./keyvault');
let getConn         =   false;
let pool;



class MySQLDB {
    async query(sql, args=false){
        let conn;
        try {
            
            await connectToDb();  
            
            conn            =   await pool.getConnection();
            let [ rows ]    =   await conn.query(sql,args)
            conn.release();
            return { status : true , rows : rows };
        }
        catch(e){
            if (conn) conn.release();
            console.log('MYSQLDB',e)
            return { status : false , message : e.meesge }
        }
    }
}


async function connectToDb() {
    if(!getConn){
        let config = {
            host    : process.env.DB_HOST,
            port    : 3306,
            ssl     : { rejectUnauthorized: false },
            user    : process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        };
        pool = mysql.createPool(config);
        getConn =  true;
        // await Promise.all([
        //     keyvault.GetSecret(process.env.DB_HOST),
        //     keyvault.GetSecret(process.env.DB_USER),
        //     keyvault.GetSecret(process.env.DB_PASS),
        //     keyvault.GetSecret(process.env.DB_NAME)
        // ]).then(response=>{
        //     console.log(response)
        //     let config = {
        //         host    : response[0],
        //         port    : 3306,
        //         ssl     : { rejectUnauthorized: false },
        //         user    : response[1],
        //         password: response[2],
        //         database: response[3],
        //     };
        //     pool = mysql.createPool(config);
        //     getConn =  true;
        // });
    }
}


const mysqlDb   =   new MySQLDB();
module.exports  =   mysqlDb;