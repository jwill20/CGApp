const database  =   require('../shared/database')
const botmodels =   require('../shared/botmodels')
const common    =   require('../shared/common')


module.exports = async function (context, req) {
    try{
        
        /*----------- Input validation-------*/
        if(common.isEmpty(req.params.id)) return context.res  =  common.parseErr(204,'Bot id missing!');
        /*-------------END ------------*/
        


        /*-------- Get bot by id from mysql db------*/
        let sql         =   botmodels.fetchSQLBotByID();
        let result      =   await database.query(sql,[req.params.id])
        if(result.status){
            if(result.rows.length > 0){
                let row     =   result.rows[0];
                let resp    =   {
                    id      : row.id,
                    owner   : row.owner,
                    name    : row.name,
                    status  : row.status,
                }
                return context.res  =  common.parseOk(200,resp);
            }
        }
        return context.res  =  common.parseOk(404,'No data found!');
        /*-------------END ------------*/


    }
    catch(e){
        /*------- return internal server Err-------*/
        return context.res  =  common.parseErr(500,'Internal Server Error')
    }
};






