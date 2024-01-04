
# llm-api-endpoints-agents ![npm](https://img.shields.io/npm/v/llm-api-endpoints-agents) ![build](https://img.shields.io/badge/build-passing-brightgreen)

## Overview
`llm-api-endpoints-agents` is a Node.js package designed to interpret human language prompts and determine the appropriate API endpoint based on a configuration file. This library simplifies the process of sending requests and processing responses from human language inputs. It's ideal for developers building applications that interact with APIs through human language. **Please note:** This library is intended for research and hobby use, and is not recommended for production environments.

## Documentation
For a detailed breakdown of the library's functionalities, refer to our [JsDoc Documentation](https://dsl2022.github.io/llm-api-agent/).

## Demo
Experience the library in action with our [React Chatbot Demo](http://d2f0d82fydy0jb.cloudfront.net/). This application showcases the library's ability to process natural language prompts, select relevant API endpoints, and fetch data from third-party APIs. The demo includes a user-friendly chat interface and provides real-time interactions.

## Installation
Install the package in your Node.js project with the following command:
```bash
npm install llm-api-endpoints-agents
```

## Setup
To get started with `llm-api-endpoints-agents`, set up your environment:

1. **Environment Configuration**:
   Create a `.env` file in your project root and include your OpenAI API key and the path to your API endpoints configuration:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   API_ENDPOINTS_CONFIG_PATH=path_to_your_api_endpoints_config_file
   ```

2. **API Endpoints Configuration**:
   Your `api-endpoints.json` should list all available endpoints and their descriptions:
   ```json
   {
     "endpoints": [
       {
         "name": "GetProducts",
         "endpoint": "/get-products",
         "description": "Retrieves a list of products..."
       },
       // Add more endpoints as needed
     ]
   }
   ```

## Usage
Implement `llm-api-endpoints-agents` in your project with ease:

```javascript
const { EndPoint } = require('llm-api-endpoints-agents');

// Initialize an endpoint instance
let endpoint = new EndPoint("Your request text here");

// Interact with an endpoint
endpoint.selectEndpoint("Your request text here","your openai key")
    .then(response => console.log("Response:", response))
    .catch(error => console.error("Error:", error));
```

## Examples
Get started quickly with our [Basic Usage Example](./example/use-endpoint). This example demonstrates the fundamental features of the library. Additionally, you can integrate the library into a simple API server, as shown in our detailed examples.

## Contributing
We encourage contributions and collaboration. Follow these guidelines for your pull requests:

- Use semantic commit messages.
- Refer to our [Commit Message Guide](https://github.com/semantic-release/semantic-release) for formatting.

## Disclaimer
This package uses the MIT Creative License. It's important to note:
- **No Endorsement**: This license does not imply any endorsement by MIT.
- **No Warranty**: Provided "as is" without any warranty.
- **Compliance**: Ensure use complies with the MIT License.

For more details, see the [MIT License](LICENSE.txt) documentation.

**Happy Hacking!** Join our journey of innovation and learning.

---
