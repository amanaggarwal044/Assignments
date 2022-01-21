var list_items = document.querySelectorAll(".selector1>ul>li");
console.log(list_items);

list_items[0].classList.add("active_list");   //display inline block   
list_items[0].children[0].classList.add("active_list_item");  //text color blue and underline
list_items[0].insertAdjacentHTML("beforeend",`<i class="fa fa-angle-down list_icon" aria-hidden="true"></i>`);
   

list_items.forEach((list)=>{
list.addEventListener('click',()=>{
    
    list_items.forEach((item)=>{
        item.classList.remove("active_list");
        item.children[0].classList.remove("active_list_item");
        if(item.children[1]!=undefined)
        {
         item.children[1].parentNode.removeChild(item.children[1]);
        }

    
    })   
console.log(list);
    list.classList.add("active_list");
    list.children[0].classList.add("active_list_item");
    list.insertAdjacentHTML("beforeend",`<i class="fa fa-angle-down list_icon" aria-hidden="true"></i>`);
    
})




    })


