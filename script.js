function makeNetworkCall(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const responsedata=[
                "chnnai",
                "bengolore",
                "mumbai",
                "hyderabad",
                "pune"
            ]
            resolve(responsedata)
        },3000)
    })
}
const container=document.getElementById("output")

function appendDataOntoUi(citilist){
	
    
    citilist.forEach((city)=>{
        const p=document.createElement("p");
         p.innerText=city;
         container.appendChild(p)


    })

    

}

let promise=makeNetworkCall();

promise.then((data)=>{
    appendDataOntoUi(data)

})

