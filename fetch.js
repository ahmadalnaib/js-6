//fetch api
fetch("https://api.github.com/users").then((response)=>{
     console.log("response data",response);
     return response.json();
}).then((data)=>{
  console.log(data);
  
}).catch((err)=>{
console.log("err in data", err)
})