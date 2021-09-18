import { CreateSchemaCommand } from "@aws-sdk/client-schemas";

export async function createSchema(client: any, body: any) {
  const { content, description, registryName, schemaName, type } = body;
  if (!content || !description || !registryName || !schemaName || !type)
    throw new Error("Missing required arguments!");

  const input = {
    Content: JSON.stringify(content),
    Description: description,
    RegistryName: registryName,
    SchemaName: schemaName,
    Type: type,
  };

  const command = new CreateSchemaCommand(input);

  return await client.send(command);
}
