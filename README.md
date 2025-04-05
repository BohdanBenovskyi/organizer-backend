## Local Run Commands

```bash
docker build -t organizer-backend . 
```

```bash
docker run -d -p 6785:6785 -p 9229:9229 --env-file ./.env organizer-backend
```

## VSCode Lunch Configuration

```json
{
  "version": "0.2.0",
  "configurations": [
    {
        "type": "node",
        "request": "attach",
        "name": "Debug docket container",
        "remoteRoot": "/app",
        "port": 9229,
        "address": "0.0.0.0",
        "localRoot": "${workspaceFolder}",
        "outFiles": [
            "${workspaceFolder}/build/**/*.(m|c|)js",
            "!**/node_modules/**"
        ],
        "restart": true,
        "sourceMaps": true
    }
  ]
}
```