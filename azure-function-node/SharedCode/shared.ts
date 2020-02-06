import { Context } from "@azure/functions"

export const helloWorld = function(context: Context, name: string):string {
    context.log('HTTP trigger function processed a request.');
    if (name) {
        return "Hello " + name;
    }
    else {
        return "Please pass a name on the query string or in the request body Chnaged";
    }
}
