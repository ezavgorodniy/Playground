import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { helloWorld } from "../SharedCode/shared";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    context.res = {
        status:name  ? 200:  400,
        body: helloWorld(context, name)
    };
};

export default httpTrigger;
