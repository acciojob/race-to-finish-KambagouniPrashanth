window.promises=[]
let a=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("a")
        },3000)
    })
    
    let b=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("b")
        },4000)
    })
    
    let c=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("c")
        },5000)
    })
let d=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("d")
        },1000)
    })
let e=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("e")
        },2000)
    })
promises.push(a);
promises.push(b);
promises.push(c);
promises.push(d);
promises.push(e);
    let x=Promise.any(promises)
    // setTimeout(()=>{
    //     console.log(x)
    
    // },4000)
    x.then((data)=>{
        const divElement=document.getElementById("output")
       divElement.innerText=data;
    })