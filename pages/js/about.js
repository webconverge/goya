


/*
    --about--
*/


import * as util from "../../util/util.js"

import header from "../../components/js/header.js"

import slide_show_2 from "../../components/js/slide_show_2.js"

document.querySelectorAll(".slide-show-2").forEach(item => {

    slide_show_2(item)
})

header()

util.resize()

util.intersection()





