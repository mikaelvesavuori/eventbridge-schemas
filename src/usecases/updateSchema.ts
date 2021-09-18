import { UpdateSchemaCommand } from "@aws-sdk/client-schemas";

export async function updateSchema(client: any, body: any) {
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

  const command = new UpdateSchemaCommand(input);

  return await client.send(command);
}
