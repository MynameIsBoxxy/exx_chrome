let popupDiv = document.getElementById("resultBookSearch");
if (popupDiv){
    chrome.storage.sync.get("rows", ({rows}) => {
        rows.map( element => {
            let div = document.createElement('div')
            div.textContent = element.price
            popupDiv.appendChild(div)
        })  
        
    })
}

