import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:--------@ep-calm-bar-a5eywy11.us-east-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}