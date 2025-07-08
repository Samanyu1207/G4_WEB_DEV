//PROMISE IS AN OBJECT AND HOW DO WE MAKE IT



const promise1=new Promise((resolve,reject)=>{
    const a=1+1;
    if(a==2){
        resolve("Success");
    }else{
        reject("Failed");
    }
});