using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace NestedArrayPlayground
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // mongodb+srv://<username>:<password>@yevhenpersonal-r56xp.mongodb.net/test?retryWrites=true&w=majority
            var connection =
                "mongodb+srv://<username>:<password>@yevhenpersonal-r56xp.mongodb.net/test?retryWrites=true&w=majority";
            var mongoConnection = new MongoClient(connection);
            var db = mongoConnection.GetDatabase("11111111-1111-1111-1111-555555550001");
            var collection = db.GetCollection<BsonDocument>("importSource");
            const string importSourceId = "5e428f8d4475811668027826";
            const string importInstanceId = "5e45e3d9cb988100002a52d6";

            var filter = Builders<BsonDocument>.Filter.And(
                Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(importSourceId)),
                Builders<BsonDocument>.Filter.ElemMatch("ImportInstances",
                    Builders<BsonDocument>.Filter.AnyEq("_id", new ObjectId(importInstanceId))));

            var matching = await collection.Find(filter).ToListAsync();
            Console.Write(matching.Count);  

            var update = Builders<BsonDocument>.Update.Set(c => c["ImportInstances"][-1], new BsonDocument(new Dictionary<string, object>()
            {
                { "Changed", "Changed" },
                { "Changed2", "Changed2" }
            }));

            await collection.UpdateOneAsync(filter, update);
        }
    }
}
