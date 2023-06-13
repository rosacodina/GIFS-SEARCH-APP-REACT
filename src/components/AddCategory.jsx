import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ( {onNewCategory}) => {

  const [ inputValue, setInputValue ] = useState( "" );

  const onInputChange = ( event ) => {
    setInputValue( event.target.value );
  }


  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1) return;

    setInputValue( "" );
    onNewCategory( inputValue.trim() );
  }


  return (
    <form onSubmit={ ( event => onSubmit( event ) )} aria-label="form">

      <input
        type = "text"
        placeholder= "Busca un gif"
        value = { inputValue }
        onChange = { (event) => onInputChange( event ) }
      />

    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

export {AddCategory}
