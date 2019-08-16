

const Todos=(res)=>{

  return new Promise((resolve,reject)=>{

    const request= new XMLHttpRequest();

  request.addEventListener('readystatechange',()=>{
    if(request.readyState===4 && request.status===200){
      const data= JSON.parse(request.responseText);
      resolve(data)
    }else if(request.readyState ===4){
      reject("err")
    }
  });

  request.open("GET",res);
  request.send();

  });
  
};

Todos('ahmed.json').then((data)=>{
console.log('promise resolve',data);
return Todos('ali.json');
}).then((data)=>{
console.log('res 2',data)
}).catch((err)=>{
console.log('err we have',err)
})