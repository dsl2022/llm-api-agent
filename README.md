# llm-api-endpoints-agents

## Overview
`llm-api-endpoints-agents` is a Node.js package designed for using gpt to automatically select the right api endpoint based on human language prompt. It simplifies sending requests and processing responses from human language request, targeting users who want to build applications that will send https request based on human language. Note: currently only works with English. 

## Installation
To install the package, run the following command in your Node.js project:
```bash
npm install llm-api-endpoints-agents
```

## Setup
Before using `llm-api-endpoints-agents`, you need to set up a few things:

1. **.env File**: Create a `.env` file in your project root with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   API_ENDPOINTS_CONFIG_PATH=path_to_your_api_endpoints_config_file
   ```

2. **API Endpoints Configuration**: You need to have an `api-endpoints.json` file in your project root. Here's a template:
   ```json
   {
     "endpoints": [
       {
         "name": "GetProducts",
         "endpoint": "/get-products",
         "description": "Retrieves a list of products. Can be filtered by category, price range, and sorted by popularity or ratings."
       },
       {
         "name": "GetProductDetails",
         "endpoint": "/get-product-details",
         "description": "Provides detailed information about a specific product, including descriptions, images, and reviews."
       }
     ]
   }
   ```

## Usage
Here's how to use `llm-api-endpoints-agents` in your project:

```javascript
const { EndPoint } = require('llm-api-endpoints-agents');

// Create an endpoint instance
let endpoint = new EndPoint("Your request text here");

// Select and interact with a specific endpoint
endpoint.selectEndpoint("Your request text here")
    .then(response => {
        console.log("Response:", response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```
