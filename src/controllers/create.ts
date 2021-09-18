import { SchemasClient } from "@aws-sdk/client-schemas";

import { createSchema } from "../usecases/createSchema";

const client = new SchemasClient({ region: "eu-north-1" });

export async function handler(event: any) {
  try {
    const body = event.body ? JSON.parse(event.body) : undefined;
    if (!body) throw new Error("Missing body!");

    const data = await createSchema(client, body);
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
