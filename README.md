# llm-api-endpoints-agents

## Overview
`llm-api-endpoints-agents` is a [NPM package](https://www.npmjs.com/package/llm-api-endpoints-agents) designed for using human language prompt to automatically infer which api endpoint to use based on a config file. It simplifies sending requests and processing responses from human language request, targeting users who want to build applications that will send https request based on human language. Note: This library is only built for reseach and hobby use, not meant for production use. 

## Demo
This demo is a react chatbot app that connects to an api through server sent event, it was built to demo the functionality of this library. When user submit a request using natural langage prompt, the api will use this package to determine which endpoint it should query a third party api to get the necessary information.(a api endpoints config is also needed). Then it will make the request to that api with the information and return the response. If the request is not relevant, the system will return a message prompting `no endpoint is a good fit`

[chat app ](http://d2f0d82fydy0jb.cloudfront.net/)

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

2. **API Endpoints Configuration**: You need to have an `api-endpoints.json` file in your project root that list all the endpoints of your api and their descriptions. Here's a template:
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
endpoint.selectEndpoint("Your request text here","your openai key")
    .then(response => {
        console.log("Response:", response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```
## Examples
there is a [use-endpoint](./example/use-endpoint) example shows how to use this library on a basic level. You can also write a simple api server to integrate this library. 

## Commit notes
The Github action CICD is using [sementic release]("https://github.com/semantic-release/semantic-release) to handle the NPM publish job, so you must use the `Conventional Commits` specify a format like this:


| Commit message                                                                                                                                                  | Release type                                                                                                 |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                           | Patch Release                                                                                                |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                      | Minor (Feature) Release                                                                                      |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Major (Breaking) Release <br /> (Note that the `BREAKING CHANGE:` token must be in the footer of the commit) |


Certainly, here's a sample disclaimer for the use of the MIT Creative License:

---

**Disclaimer for the Use of MIT Creative License**

Please be advised that this project utilizes the MIT Creative License for certain elements. The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). It permits reuse within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

**Key Points of the MIT Creative License:**
1. **Permission to Use**: The license allows users to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software or documentation, offering a wide range of freedoms to users.
2. **Conditions**: Users must include the original copy of the MIT License and copyright notice in any substantial portions of the software used.
3. **Limitation of Liability**: The software is provided "as is", without warranty of any kind. The authors or license holders are not liable for any claim, damages, or other liabilities.

**Disclaimer:**
- **No Endorsement**: This license does not imply any endorsement by MIT or the original creators of the licensed material.
- **No Warranty**: The materials under this license are provided "as is" without any express or implied warranty. The users of these materials bear all risks associated with their use.
- **Compliance**: It is the user's responsibility to ensure that their use of these materials complies with the MIT License and any applicable laws or regulations.
- **Modifications**: If modifications are made to the materials, it should be noted that the modified materials are not endorsed or verified by the original creators or MIT.

By using the materials under this license, you acknowledge and agree to these terms and conditions.

---
