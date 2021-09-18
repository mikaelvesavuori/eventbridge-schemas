import {
  ListSchemasCommand,
  DescribeSchemaCommand,
} from "@aws-sdk/client-schemas";

export async function listSchemas(client: any, input: any) {
  const command = new ListSchemasCommand(input);

  return await client.send(command);

  /*
  // TODO: Fix and get this working
  const schemas = listData["Schemas"];
  const schemaPromises =
    schemas && schemas.length > 0
      ? schemas.map(async (schema: any) => {
          console.log("schema", schema);

          const describeCommand = new DescribeSchemaCommand({
            RegistryName: input.RegistryName,
            SchemaName: schema.SchemaName,
            SchemaVersion: schema.VersionCount,
          });

          return await client.send(describeCommand);
        })
      : null;

  const data = Promise.all([schemaPromises]);
  console.log("data", data);

  return await client.send(data);
  */
}
