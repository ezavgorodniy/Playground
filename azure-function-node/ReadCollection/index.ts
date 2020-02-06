import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { MongoClient } from "mongodb";

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const collectionName =
    req.query.collectionName || (req.body && req.body.collectionName);
  if (collectionName) {
    const mongoUri = "***";
    const dbName = "11111111-1111-1111-1111-555555550001";

    let client: MongoClient;
    try {
      client = await MongoClient.connect(mongoUri);
    } catch (error) {
      context.log("Failed to connect");
      context.res = { status: 500, body: error };
      return context.done();
    }

    try {
      const docs = await client
        .db(dbName)
        .collection(collectionName)
        .find()
        .toArray();
      context.log("Success!");
      context.res = {
        headers: { "Content-Type": "application/json" },
        status: 200,
        body: JSON.stringify({ res: docs })
      };
    } catch (error) {
      context.log("Error running query");
      context.res = { status: 500, body: error };
    }
  } else {
    context.res = {
      status: 400,
      body:
        "Please pass a collectionName on the query string or in the request body"
    };
  }
};

export default httpTrigger;
