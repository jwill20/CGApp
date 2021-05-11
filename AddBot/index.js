const database  =   require('../shared/database')
const botmodels =   require('../shared/botmodels')
const common    =   require('../shared/common')


module.exports = async function (context, req) {
    try{
        
        /*---- Input validation for bot------*/
        let input       =   req.body;
        let resperr     =   common.validateFields(input,['id', 'owner', 'name', 'status']);
        if(resperr) return context.res  =    common.parseErr(204, resperr)
        /*-------------END ------------*/



        /*------- Check bot id already exist------*/
        let checkBot     =   await database.query(botmodels.fetchSQLBotByID(),[input.id]);
        if(checkBot.status){
            if(checkBot.rows.length > 0){
                return context.res  =   common.parseOk(200,'Bot already Exist');
            }
        }
        /*-------------END ------------*/




        /*------ add new bot to mysql db------*/
        let sql         =   botmodels.addSQLBot();
        let result      =   await database.query(sql,[input.id, input.owner, input.name, input.status])
        if(result.status){
            if(result.rows['insertId'] != undefined && result.rows.insertId > 0){
                return context.res  =    common.parseOk(200,'New Bot has been added successfuly');
            }
        }
        return context.res  =    common.parseErr(404,'Unable to add new Bot!');
        /*-------------END ------------*/


    }
    catch(e){
        /*------- return internal server Err-------*/
        console.log(e)
        return context.res  =    common.parseErr(500,'Internal Server Error')
    }
};






