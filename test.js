const {EndPoint} = require('./dist')
const apiQE = require("./api-endpoints-questions.json")
const endpoint = new EndPoint("test",".")

async function test(){
    const finalResults = await apiQE.map(async (item)=>{
        const result =  await endpoint.selectEndpoint(item.question)        
        return result
    })
    const resolvedResult =  await Promise.all(finalResults)
    resolvedResult.forEach((result,index) =>{
        console.log(result.choices[0],apiQE[index].endpoint)
    })
    return
}

console.log(test())