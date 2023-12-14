import { useTypeModal } from "../hooks/useModal"
import "../test.css"
export function Modal(){
   return (
    <>
    <div className="modal" id="modal">
      <div className="modalBody">
      <h1>Ola lore</h1>
       <button onClick={()=> useTypeModal("modal", false)}>Fechar</button>
      </div>
    </div>
  </>
   )
}