 const Todos= async()=>{
   const response =await fetch("https://api.github.com/users");
   const data =await response.json();
   return(data);
 }

 Todos().then((data)=>{
console.log('resolved',data);
 }).catch((err)=>{
console.log('err',err);
 });