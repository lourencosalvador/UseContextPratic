
export const useTypeModal = (element, status) => {
    const modal = document.getElementById(`${element}`)

    if(status){
        modal.style.display = "flex"
    } else{  
        modal.style.display = "none"
    }
}