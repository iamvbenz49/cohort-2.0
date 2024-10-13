import { getClient } from "./utils";

async function createTable() {
    const client = await getClient();
    const deleteTodosQuery = `
        DROP TABLE todos;
    `;


    await client.query(deleteTodosQuery);
    const deleteUserTableQuery = `
        DROP TABLE users;
    `;
    

    await client.query(deleteUserTableQuery);

    console.log("Table deleted successfully!");
}



createTable();