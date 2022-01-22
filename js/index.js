function f1(){
var list_items = document.querySelectorAll(".selector1>ul>li");
console.log(list_items);
list_items.forEach((list)=>{
list.addEventListener('click',()=>{
    list_items.forEach((item)=>{    
        console.log(item.children[0].classList.contains("active_list_item"));
        if((item.classList.contains("active_list") && item.children[0].classList.contains("active_list_item")))
        { 
            console.log("in if loop");
        }
        else{
            item.classList.toggle("active_list");
        }
    
    })
    
    if(!list.children[0].classList.contains("active_list_item"))
    {



        var prev_selected_item = document.querySelector(".selector1>ul>li>span.active_list_item");
        console.log(prev_selected_item);
        
        prev_selected_item.nextElementSibling.remove();
        prev_selected_item.classList.remove("active_list_item");
        prev_selected_item.parentElement.classList.remove("active_list");
        
        list.classList.add("active_list");
        list.children[0].classList.add("active_list_item");
        list.insertAdjacentHTML("beforeend",`<i class="fa fa-angle-down list_icon" aria-hidden="true"></i>`);
    
        console.log(list);
        console.log(list.parentElement);
        list.parentElement.insertAdjacentHTML(
            "afterbegin",
            `${list.outerHTML}`
          );
          list.remove();
f1();
    
    }


     
})

    })

}

f1();


