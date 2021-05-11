const database  =   require('../shared/database')
const botmodels =   require('../shared/botmodels')
const common    =   require('../shared/common')


module.exports = async function (context, req) {
    try{
        
        /*---- Input validation for bot------*/
        let input       =   req.body;
        let resperr     =   common.validateFields(input,['id', 'owner', 'name', 'status']);
        if(resperr) return context.res  =  common.parseErr(204, resperr)
        /*-------------END ------------*/
        



        /*------- Check bot id already exist------*/
        let checkBot     =   await database.query(botmodels.fetchSQLBotByID(),[input.id]);
        if(checkBot.status){
            if(checkBot.rows.length == 0){
                return context.res  =  common.parseOk(200,'Bot not Exist');
            }
        }
        /*-------------END ------------*/




        /*------ update bot to mysql db------*/
        let sql         =   botmodels.updateSQLBot();
        let result      =   await database.query(sql,[input.owner, input.name, input.status, input.id])

        if(result.status){
            if(result.rows['affectedRows'] != undefined && result.rows.affectedRows > 0){
                return context.res  =  common.parseOk(200,'Bot has been updated successfuly');
            }
        }

        return context.res  =  common.parseErr(404,'Unable to update Bot!');
        /*-------------END ------------*/

    }
    catch(e){
        /*------- return internal server Err-------*/
        console.log(e)
        return context.res  =  common.parseErr(500,'Internal Server Error')
    }
};






