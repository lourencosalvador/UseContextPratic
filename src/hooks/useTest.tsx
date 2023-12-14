

export const useTest = (element, status) => {
    const elementHTML: HTMLElement | null = document.getElementById(`${element}`) as HTMLElement

    if(status){
        elementHTML.style.display = "flex"

    } else {
        elementHTML.style.display = "none"
    }
}