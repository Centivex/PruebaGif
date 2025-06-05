import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({agregar}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        //para que se muestre en la conosla aunque se recarge
        event.preventDefault();

        if(inputValue.trim()<=1) return;
        agregar(inputValue.trim())
        setInputValue('')
    }

    //meterlo en el form nos permite que se envie al darle a enter
    return(
        <form onSubmit={(event)=>onSubmit(event)} aria-label="form">
            <input type="text" value={inputValue} placeholder="Escribe..."  onChange={onInputChange}/>
        </form>
    )
}

AddCategory.propTypes ={
    agregar: PropTypes.func.isRequired
}

