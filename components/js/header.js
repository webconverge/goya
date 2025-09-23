

/*
    --header--
*/

export default function header(){

    const header = document.querySelector("header")
    
    const open = document.querySelector("header button:first-of-type")

    const close = document.querySelector("header button:nth-of-type(2)")

    const nav = document.querySelector("header ul")


    open.addEventListener("click", ()=>{

        if(!header.hasAttribute("nav-open")) header.setAttribute("nav-open", "")
    })

    close.addEventListener("click", ()=>{

        if(header.hasAttribute("nav-open")) header.removeAttribute("nav-open", "")
    })

    window.addEventListener("click", e => {

        if(header.hasAttribute("nav-open")){
            
            if(!nav.contains(e.target) && !open.contains(e.target) && !close.contains(e.target)) header.removeAttribute("nav-open")
        }
    })

}

