import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { config } from  "https://deno.land/x/dotenv/mod.ts";

const env = config();
const connectionString = env['MONGODB_CONNECTION_STRING'] || "";
const database = env['MONGO_DATABASE'] || "";

const client = new MongoClient();
client.connectWithUri(connectionString);

export const db = client.database(database);
export const users = db.collection("users");