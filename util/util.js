

/*
    --util--
*/

function resize(){

    const items = document.querySelectorAll(".resize")

    const res = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    items.forEach(item => {

                        if(item.hasAttribute("small")) item.removeAttribute("small")

                        if(item.hasAttribute("medium")) item.removeAttribute("medium")
                    })
                }
                else if(entry.target.offsetWidth > 600 && entry.target.offsetWidth < 800){

                    items.forEach(item => {

                        if(!item.hasAttribute("medium")) item.setAttribute("medium", "")

                        if(item.hasAttribute("small")) item.removeAttribute("small")
                    })
                }
                else{

                    items.forEach(item => {

                        if(!item.hasAttribute("small")) item.setAttribute("small", "")

                        if(item.hasAttribute("medium")) item.removeAttribute("medium")
                    })

                }
            }
        })
    })

    res.observe(document.body)
}


function intersection(){

    const items = document.querySelectorAll(".intersection")

    const inter = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.setAttribute("intersected", "")
            }
        })

    }, { root:null, threshold:0 })

    items.forEach(item => {

        inter.observe(item)
    })

}


export { resize, intersection }



