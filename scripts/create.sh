REGISTRY_NAME="my-registry"
SCHEMA_NAME="DemoCreatedSchema2"

aws schemas create-schema \
  --registry-name $REGISTRY_NAME \
  --schema-name $SCHEMA_NAME \
  --type OpenApi3 \
  --content "{
  \"openapi\": \"3.0.0\",
  \"info\": {
    \"version\": \"1.0.0\",
    \"title\": \"Event\"
  },
  \"paths\": {},
  \"components\": {
    \"schemas\": {
      \"Event\": {
        \"type\": \"object\",
        \"required\": [\"something\"],
        \"properties\": {
          \"something\": {
            \"type\": \"string\"
          }
        }
      }
    }
  }
}"