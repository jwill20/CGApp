const database  =   require('../shared/database')
const botmodels =   require('../shared/botmodels')
const common    =   require('../shared/common')


module.exports = async function (context, req) {
    try{
        
        /*----------- Input validation-------*/
        if(common.isEmpty(req.params.id)) return context.res  =  common.parseErr(204,'Bot id missing!');
        /*-------------END ------------*/



        /*-------- Delete bot by id from mysql db------*/
        let sql         =   botmodels.deleteSQLBotById();
        let result      =   await database.query(sql,[req.params.id])
        
        if(result.status){
            if(result.rows['affectedRows'] != undefined && result.rows.affectedRows > 0){
                return context.res  =  common.parseOk(200,'Bot has been deleted successfuly');
            }
        }
        return context.res  =  common.parseOk(404,'Unable to delete bot!');
        /*-------------END ------------*/


    }
    catch(e){
        /*------- return internal server Err-------*/
        return context.res  =  common.parseErr(500,'Internal Server Error')
    }
};






