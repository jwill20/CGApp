const database  =   require('../shared/database')
const botmodels =   require('../shared/botmodels')
const common    =   require('../shared/common')

module.exports = async function (context, req) {
    try{
        

        /*-------- Get bots from mysql db------*/
        let sql         =   botmodels.fetchSQLBots();
        let result      =   await database.query(sql)

        if(result.status){
            if(result.rows.length > 0){
                let resp    =   [];
                result.rows.map(row=>{
                    let obj     =   {
                        id      : row.id,
                        owner   : row.owner,
                        name    : row.name,
                        status  : row.status,
                    }
                    resp.push(obj)
                });
                return context.res  =  common.parseOk(200,resp);
            }
        }
        
        return context.res  =  common.parseOk(404,'No data found!');
        /*-------------END ------------*/
       

    }
    catch(e){
        /* return internal server Err*/
        return common.parseErr(500,'Internal Server Error')
    }
};






