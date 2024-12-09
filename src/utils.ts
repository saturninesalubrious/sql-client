import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://my_database_c7vf_user:aXh4bHzZzyre5XbmLO7GHUzXFDsnsbZ1@dpg-ctasjuggph6c73es2rb0-a/my_database_c7vf");
    await client.connect();
    return client;
}

