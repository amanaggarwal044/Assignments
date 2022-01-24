var list_items = document.querySelectorAll(".selector1>ul>li");
// console.log(list_items);
// console.log(a)
list_items.forEach((list)=>{
list.addEventListener('click',()=>{
    list_items.forEach((item)=>{    
        if(item.classList.contains("active_list") && item.children[0].classList.contains("active_list_item"))
        { 
            // console.log("in if loop");
        }
        else{
            item.classList.toggle("active_list");
        }
    
    })
    
    if(!list.children[0].classList.contains("active_list_item"))
    {



        var prev_selected_item = document.querySelector(".selector1>ul>li>span.active_list_item");
        
        document.querySelector(`.${prev_selected_item.textContent.replaceAll(" ","_")}`).classList.remove("active_render_list_content");
        prev_selected_item.nextElementSibling.remove();
        prev_selected_item.classList.remove("active_list_item");
        prev_selected_item.parentElement.classList.remove("active_list");
        
        list.classList.add("active_list");
        list.children[0].classList.add("active_list_item");
        list.insertAdjacentHTML("beforeend",`<i class="fa fa-angle-down list_icon" aria-hidden="true"></i>`);
        var renderingClassName=list.children[0].textContent.replaceAll(" ", "_");
        document.querySelector(`.${renderingClassName}`).classList.add("active_render_list_content");

        // list.parentElement.insertAdjacentHTML(
        // "afterbegin",
        //     `${list.outerHTML}`
        //   );
        //   list.remove();




    
    }


     
})

    })




