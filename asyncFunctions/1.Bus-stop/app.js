async function getInfo() {
    let id = document.getElementById("stopId").value
    let url = `http://localhost:3030/jsonstore/bus/businfo/${id}`
    let field = document.getElementById("stopName");
    

    try{

        document.getElementById("buses").innerHTML=''
        let result = await fetch(url)
        field.textContent = "Loading..."
       
        if(result.status!== 200){
         throw new Error ('Stop ID not found!');
        }
        let data = await result.json();
         field.textContent = data.name
        Object.entries(data.buses).forEach(el=> {
            let li = document.createElement('li');
            li.textContent=  `Bus ${el[0]} arrives in ${el[1]} minutes`
            document.getElementById("buses").appendChild(li)
        })
         
    }
    catch{
        field.textContent = "ERROR"
    }
  

   
}
