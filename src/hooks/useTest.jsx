import { useState } from "react";


export function useTest(elemnt, type){
    const elementHtml = document.getElementById(`${elemnt}`)
 
    if(type === "add"){
        elementHtml.style.display = "flex"
    } else {
        elementHtml.style.display = "none"
    }
}