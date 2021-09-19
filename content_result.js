let rows = document.querySelectorAll('.sr_item_default');
if (rows.length > 0){
    let arr = [];
    rows.forEach( (item, index) => {
        if (index < 5) {
            arr.push({"price":item.querySelector('.prco-inline-block-maker-helper .bui-u-sr-only').textContent});
        }    
    })

    chrome.storage.sync.set({ "rows": arr });
}