import './style.css'
const NewButton = () => {

    return (
        <>
        <button className="newbutton">
         <div className="newbutton_icon">
         <ion-icon name="add-outline"></ion-icon>
         </div>

         <div className="newbutton_text">

        Nuevo
         </div>
        </button>
        </>
    )
}

export default NewButton