


const parseErr = (code, err) => {
    return {
        status : 200,
        body   : {
            statusCode : code,
            success : false,
            message : err
        }
    }
}

const parseOk = (code,data) => {
    return {
        status : 200,
        body   : {
            statusCode : code,
            success : true,
            data    : data
        }
    }
}

const isEmpty = (value) => {
    return (value == undefined || value == null ||  value === 'null' ||  value === 'Null' || value === 'NULL' || value == '') ;
}

const validateFields = (input, fields) => {
    let errmsg  =   [];
    fields.map(field=>{
        if(input === undefined || input[field] === undefined){
            errmsg.push(field+ ' is missing');
        }
    })
    
    if(errmsg.length > 0 ) {
        return errmsg.join(', ');
    } 
    return false;
}


module.exports = {
    parseOk:parseOk,
    parseErr:parseErr,
    isEmpty:isEmpty,
    validateFields:validateFields
}