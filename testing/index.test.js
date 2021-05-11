const context           =   require('../testing/defaultContext')
const config            =   require('../local.settings.json')


const addBotFunction    =   require('../AddBot/index');
const getBotFunction    =   require('../GetBotById/index');
const getBotsFunction   =   require('../GetBots/index');
const updateBotFunction =   require('../UpdateBot/index');
const deleteBotFunction =   require('../DeleteBot/index');



beforeAll(() => {
    process.env = Object.assign(process.env, {
        AzureWebJobsStorage: config.Values.AzureWebJobsStorage,
        DB_HOST: config.Values.DB_HOST,
        DB_USER: config.Values.DB_USER,
        DB_PASS: config.Values.DB_PASS,
        DB_NAME: config.Values.DB_NAME,
        FUNCTIONS_WORKER_RUNTIME: config.Values.FUNCTIONS_WORKER_RUNTIME,
        AZURE_CLIENT_ID: config.Values.AZURE_CLIENT_ID,
        AZURE_CLIENT_SECRET: config.Values.AZURE_CLIENT_SECRET,
        AZURE_TENANT_ID: config.Values.AZURE_TENANT_ID,
        KEY_VAULT_URI: config.Values.KEY_VAULT_URI
    })
})



test('AddBot function should return success', async () => {

    const request = {
        body: { id:'1000009', owner:'test owner', name:'test name', status:'active' }
    };

    await addBotFunction(context, request);
    expect(context.res.body.data).toEqual('New Bot has been added successfuly');

});

test('GetBots function should return success', async () => {

    const request = {
    };

    await getBotsFunction(context, request);
    expect(context.res.body.statusCode).toEqual(200);

});


test('GetBotById function should return success', async () => {

    const request = {
        params: { id:'1000009'}
    };

    await getBotFunction(context, request);
    expect(context.res.body.data.id).toEqual('1000009');

});


test('UpdateBot function should return success', async () => {

    const request = {
        body: { id:'1000009', owner:'updated owner', name:'updated name', status:'inactive' }
    };

    await updateBotFunction(context, request);
    expect(context.res.body.data).toEqual('Bot has been updated successfuly');

});



test('DeleteBot function should return success', async () => {

    const request = {
        params: { id:'1000009'}
    };

    await deleteBotFunction(context, request);
    expect(context.res.body.data).toEqual('Bot has been deleted successfuly');

});
