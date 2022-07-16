async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    let result = await (await fetch (url)).json();
    let main = document.getElementById("main")
    result.forEach(x=>{
        let div = document.createElement('div')
        div.className= "accordion"
        div.innerHTML= `
        <div class="head">
        <span>${x.title}</span>
        <button class="button" id=${x._id}>More</button>
    </div>
    <div class="extra">
        <p></p>
    </div>`
   
    main.appendChild(div)
    div.querySelector("button").addEventListener('click', more)
    })

   async function more(e){
    let id = e.target.id
      let idUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
      let data = await (await fetch(idUrl)).json();
      let text =  e.target.parentNode.parentNode.getElementsByClassName('extra')[0]
      text.textContent= data.content
       
       let bottonCondition = e.target
         
       if(bottonCondition.textContent=='More'){
          bottonCondition.textContent= 'Less'
          text.style.display= 'block'
       }
       else{
          bottonCondition.textContent= 'More'
          text.style.display= 'none'
  
       }
       
   }
}
solution()
