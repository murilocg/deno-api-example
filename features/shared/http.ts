import { Request } from "https://deno.land/x/oak/mod.ts";

export const getQuery = (request: Request) => {
    const query = request.url.search;
    const arr = query.replace("?", "").split("&");
    const params = arr.reduce((p, c) => {
        if(c === "") return p;
        const [name, value] = c.split("=");
        const nextValue: any = {...p};
        nextValue[name] = JSON.parse(value);
        return nextValue;
    }, {});
}