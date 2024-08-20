let count = 0
let countEl= document.getElementById("count-el")

function increment(){
    count= count + 1
    countEl.textContent=count
    console.log(count)
}
function saved(){
    let saveEl=document.getElementById("save-el")
    let data = count + " - "
    saveEl.textContent += data 
    countEl.textContent=0
    count =0 
   
    console.log(count)

}
