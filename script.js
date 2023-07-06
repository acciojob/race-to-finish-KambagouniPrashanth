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
    let x=Promise.any([a,b,c,d,e])
    // setTimeout(()=>{
    //     console.log(x)
    
    // },4000)
    x.then((data)=>{
        const divElement=document.getElementById("output")
       divElement.innerText=data;
    })