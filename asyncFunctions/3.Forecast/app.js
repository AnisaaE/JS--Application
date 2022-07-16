 function attachEvents() {
     let input = document.getElementById("location")
     let url ="http://localhost:3030/jsonstore/forecaster/locations"
     document.getElementById("submit").addEventListener('click', getFunc())
      
     async function getFunc(){
        let result = await (await fetch(url)).json();
        let found = result.filter(el => el.name==input.value)
        console.log(found)
      //  if(found.length ==0){
      //    throw new Error("Error")
       // }
       // let urlLocation = `http://localhost:3030/jsonstore/forecaster/today/${found[0].code}`
      //  let data = await (await fetch(urlLocation)).json();
      //  console.log(data)
      }
    

}attachEvents();
