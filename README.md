# EventBridge schemas

This is a bare-bones WIP repo that uses Serverless Framework to deploy microservices for CRU(D)'ing EventBridge schemas.

## Requests

### Create

```json
POST ${URL}/${STAGE}/schema

{
  "content": {
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Event"
    },
    "paths": {},
    "components": {
      "schemas": {
        "Event": {
          "type": "object",
          "required": ["something"],
          "properties": {
            "something": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "description": "My description",
  "registryName": "my-registry",
  "schemaName": "demo-schema",
  "type": "OpenApi3"
}
```

### Update

```json
PUT ${URL}/${STAGE}/schema

{
  "content": {
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Event"
    },
    "paths": {},
    "components": {
      "schemas": {
        "Event": {
          "type": "object",
          "required": ["something"],
          "properties": {
            "something": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "description": "My updated description",
  "registryName": "my-registry",
  "schemaName": "demo-schema",
  "type": "OpenApi3"
}
```

### List

```
GET ${URL}/${STAGE}/schema?registryName=my-registry
```
