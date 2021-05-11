const {DefaultAzureCredential}      =   require("@azure/identity");
const {SecretClient}                =   require("@azure/keyvault-secrets");

let  url                            =   process.env.KEY_VAULT_URI;
const credential                    =   new DefaultAzureCredential();
const client                        =   new SecretClient(url, credential);


const GetSecret     =   async (secret) =>{
    try{
        let result  =   await client.getSecret(secret);
        if(result && result.value) {
            return result.value
        }
        return false;

    }
    catch(e){
        console.log('kvErr--:',e)
        return false;
    }
}

const SetSecret     =   async (secret,val) =>{
    try{
        
        let result  =   await client.setSecret(secret,val);
        if(result && result.value) {
            return result.value
        }
        return false;

    }
    catch(e){
        return false;
    }
}

module.exports  = {
    GetSecret:GetSecret,
    SetSecret:SetSecret
}
