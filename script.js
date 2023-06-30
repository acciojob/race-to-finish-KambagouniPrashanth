

// // Do not change the code above this
// // add your promises to the array `promises`
// window.promises = [];
// //your JS code here. If required.
// promises=["first","second","third","fourth","fifth"]
// const divElement=document.getElementById("output")
// let time=1000;
// for(let x=0;x<promises.length;x++){
//     //console.log(promises[x])
//     setTimeout(()=>{divElement.innerText=promises[x]},time)
//     //console.log(time)
//     time=time+1000;
        

    
// }

setTimeout(()=>{
    divElement.innerText="this first promise"
    },1000)
    setTimeout(()=>{
        divElement.innerText="this second promise"
        },2000)
        setTimeout(()=>{
            divElement.innerText="this first promise"
            },3000)
            setTimeout(()=>{
                divElement.innerText="this first promise"
                },4000)
                setTimeout(()=>{
                    divElement.innerText="this first promise"
                    },5000)



// Do not change the code above this
// add your promises to the array `promises`
