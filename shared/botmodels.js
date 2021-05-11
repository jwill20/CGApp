

const fetchSQLBotByID = () => {
    return "SELECT * FROM testscript WHERE id=?";
}
const fetchSQLBots = () => {
    return "SELECT * FROM testscript";
}
const addSQLBot = () => {
    return "INSERT INTO testscript (id, owner, name, status)  VALUES (?,?,?,?) ";
}
const updateSQLBot = () => {
    return "UPDATE testscript SET owner = ?, name = ?, status = ?  WHERE id = ? ";
}
const deleteSQLBotById = () => {
    return "DELETE FROM testscript WHERE id = ? ";
}

module.exports ={
    fetchSQLBotByID:fetchSQLBotByID,
    fetchSQLBots:fetchSQLBots,
    addSQLBot:addSQLBot,
    updateSQLBot:updateSQLBot,
    deleteSQLBotById:deleteSQLBotById
}