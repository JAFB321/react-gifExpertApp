import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            // al mandarle la funcion que recibe un parametro: este parametro
            // es el valor controlado por el hook de la funcion setCategories
            // Asi que podemos sin tener la refencia directa del valor "Categories"
            // podemos modificarlo dentro de dicha funcion
            setCategories((cats) => [ inputValue, ...cats]);

            setInputValue('');
        }

    };


    return (
        <form onSubmit={hanldeSubmit}>

            <input
                type="text"
                placeholder="Ingresa un Anime..."
                value={inputValue}
                onChange={handleInputChange} />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
