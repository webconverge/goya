

/*
    --home--
*/

import * as util from "../../util/util.js"

import header from "../../components/js/header.js"

import slide_show_1 from "../../components/js/slide_show_1.js"

import slide_show_2 from "../../components/js/slide_show_2.js"

document.querySelectorAll(".slide-show-2").forEach(item => {

    slide_show_2(item)
})

document.querySelectorAll(".slide-show-1").forEach(item => {

    slide_show_1(item)
})

util.intersection()

util.resize()

header()






