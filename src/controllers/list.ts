import { SchemasClient } from "@aws-sdk/client-schemas";

import { listSchemas } from "../usecases/listSchemas";

const client = new SchemasClient({ region: "eu-north-1" });

export async function handler(event: any) {
  try {
    const { registryName } = event.queryStringParameters;
    if (!registryName) throw new Error("Missing registryName!");

    const data = await listSchemas(client, { RegistryName: registryName });
    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 401,
      body: JSON.stringify(error),
    };
  }
}
