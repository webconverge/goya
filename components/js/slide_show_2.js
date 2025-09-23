


/*
    --slide show 2--
*/


export default function slide_show_2(ref){

    const items = ref.querySelectorAll(".slide-item")

    const prev = ref.querySelector(".slide-prev")

    const next = ref.querySelector(".slide-next")

    const item_width = 250

    const item_margin = 10

    function init(){

        items.forEach((item, index) => {

            item.style.width = item_width + "px"

            item.style.marginInline = item_margin + "px"
            
            item.style.left = index * (item_width + (item_margin * 2)) + "px"

            item.style.transition = "left 0.4s"

        })

    }


    function far_left(){

        let far_left_item = null

        let far_left_pos = null
        
        items.forEach(item => {

            const pos = +item.style.left.split("px")[0]

            if(far_left_pos == null){

                far_left_pos = pos

                far_left_item = item
            }
            else if(pos < far_left_pos){

                far_left_pos = pos

                far_left_item = item
            }

        })

        return far_left_item
    }


    function far_right(){

        let far_right_pos = null

        let far_right_item = null

        items.forEach(item => {

            const pos = +item.style.left.split("px")[0]

            if(far_right_pos == null){

                far_right_pos = pos

                far_right_item = item
            }
            else if(pos > far_right_pos){

                far_right_pos = pos

                far_right_item = item
            }

        })

        return far_right_item
    }


    function prev_(){
        // ->
        const far_right_item = far_right()

        far_right_item.style.transition = ""

        far_right_item.style.left = - (item_width + (item_margin * 2)) + "px"

        setTimeout(()=>{

            far_right_item.style.transition = "left 0.4s"

            items.forEach(item => {

                const pos = +item.style.left.split("px")[0]
                
                item.style.left = pos + (item_width + (item_margin * 2)) + "px"
            })

        },100)

    }


    function next_(){
        // <-
        items.forEach(item => {

            const pos = item.style.left.split("px")[0]

            item.style.left = pos - (item_width + (item_margin * 2)) + "px"
        })

        setTimeout(()=>{

            const far_left_item = far_left()

            far_left_item.style.transition = ""

            far_left_item.style.left = (item_width + (item_margin * 2)) * (items.length - 1) + "px"

            setTimeout(()=>{

                far_left_item.style.transition = "left 0.4s"

            }, 100)

        }, 500)

    }

    next.addEventListener("click", next_)

    prev.addEventListener("click", prev_)

    init()

}