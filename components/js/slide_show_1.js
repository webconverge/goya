

/*
    --slide show 1--
*/

export default function slide_show_1(ref){

    const next = ref.querySelector(".slide-next")

    const prev = ref.querySelector(".slide-prev")

    const items = ref.querySelectorAll(".slide-item")

    let current_index = 0


    function init(){

        items.forEach(item => {

            item.style.opacity = "0"
        })

        items[current_index].style.opacity = "1"
    }

    function next_(){

        items[current_index].style.opacity = "0"

        if(current_index == items.length - 1) current_index = 0

        else current_index ++

        items[current_index].style.opacity = "1"
    }

    function prev_(){

        items[current_index].style.opacity = "0"

        if(current_index == 0) current_index = items.length - 1

        else current_index --

        items[current_index].style.opacity = "1"
    }

    next.addEventListener("click", next_)

    prev.addEventListener("click", prev_)

    init()

}



 