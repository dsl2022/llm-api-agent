const {EndPoint} = require('llm-api-endpoints-agents')
const apiQE = require("./api-endpoints-questions.json")
const dotenv = require("dotenv")
dotenv.config()
const openai_key = process.env.OPENAI_API_KEY
const endpoint = new EndPoint("gpt-4",openai_key)

async function test(){
    const finalResults = await apiQE.map(async (item)=>{
        const result =  await endpoint.selectEndpoint(item.question,"./api-endpoints.json")        
        return result
    })
    const resolvedResult =  await Promise.all(finalResults)
    resolvedResult.forEach((result,index) =>{
        console.log(result.choices[0],apiQE[index].endpoint)
    })
    return
}

console.log(test())