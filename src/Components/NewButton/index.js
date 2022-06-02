import { useDispatch } from 'react-redux';
import { newPokemon } from '../../redux/main/post_updatePokemon';


import './style.css'
const NewButton = () => {
    const dispatch = useDispatch();


    return (
        <>
        <button className="newbutton" onClick={() => dispatch(newPokemon())}>
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