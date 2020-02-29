import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { MongoClient } from "mongodb";
import { createQuery } from "odata-v4-mongodb";
import { buildODataQuery } from "../SharedCode/buildODataQuery";


const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const collectionName = req.query.collectionName;
  const dbName = req.query.dbName;
  if (collectionName && dbName) {
    const mongoUri = "***";

    let client: MongoClient;
    try {
      client = await MongoClient.connect(mongoUri);
    } catch (error) {
      context.log("Failed to connect");
      context.res = { status: 500, body: error };
      return context.done();
    }
   
    try {
        const mongodbQuery = createQuery(buildODataQuery(req));

      const docs = await client
        .db(dbName)
        .collection(collectionName)
        .find(mongodbQuery.query)
        .project(mongodbQuery.projection)
        .skip(mongodbQuery.skip || 0)
        .limit(mongodbQuery.limit || 0)
        .sort(mongodbQuery.sort)
        .toArray();
      context.log("Success!");
      context.res = {
        headers: { "Content-Type": "application/json" },
        status: 200,
        body: JSON.stringify({             
            value: docs 
        })
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
