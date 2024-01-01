export function getProducts(){
    return [
        {
          "id": 1,
          "name": "Product A",
          "price": 19.99,
          "category": "Electronics"
        },
        {
          "id": 2,
          "name": "Product B",
          "price": 29.99,
          "category": "Books"
        }
      ]      
}

export function getProductDetailById(id:string){
    return {
        "id": id,
        "name": "Product A",
        "description": "High-quality electronic item",
        "price": 19.99,
        "category": "Electronics",
        "stock": 100
      }     
}

export function registerUser(userName:string, email:string){
    return {
        message:`${userName} is registered`
      }     
}

export function userLogin(email:string,password:string){
    return {
        message:`${email} login successfully`
      }      
}

export function addToCart(userId:string,productId:string, quantity:string){
    return {
        "userId": userId,
        "productId": productId,
        "quantity": quantity
      }     
}

export function removeFromCart(userId:string,productId:string){
    return {
        "userId": userId,
        "productId": productId
      }      
}
