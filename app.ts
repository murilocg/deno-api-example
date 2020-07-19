import { Application } from 'https://deno.land/x/oak/mod.ts';
import { config } from  "https://deno.land/x/dotenv/mod.ts";
import router from './mainRouter.ts';

const env = config();
const PORT = Number(env["PORT"]) || 3000;

const app = router(new Application());

console.log(`Listening on port ${PORT} ...`)
app.listen({port: PORT});