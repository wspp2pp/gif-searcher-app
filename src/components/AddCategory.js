import React, {useState} from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ( {setcategories} ) => {

    // Texto del input
    const [inputValue, setinputValue] = useState( '' );


    const handleImputChange = (caracter) => {
        // Cada caracter que escribo lo agrego a inputValue
        setinputValue(caracter.target.value);

    }

    const handleSubmit = event => {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault();

        // Permito enviar la categoria si tiene mas de dos caracetes
        if (inputValue.trim().length > 2) {
            // Agrego lo que escribo en el inputValue al array de categorias
            setcategories(cats => [ inputValue, ...cats ]);

            // Luego de agregar la categoria, limpio la categoria ingresada
            setinputValue('');
        }

    }

    return (
        // Cada vez que lo envio
        <form onSubmit = {handleSubmit}>
            <input
                type='text'
                placeholder='Tyoe your search'
                // El contenido es igual a lo que este en inputValue
                value={ inputValue }
                // Cada vez que cambia el contenido
                onChange={ handleImputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}