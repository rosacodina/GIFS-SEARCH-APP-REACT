import { useState } from "react";

const AddCategory = ( {onNewCategory}) => {

  const [ inputValue, setInputValue ] = useState( "" );

  const onInputChange = ( event ) => {
    setInputValue( event.target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1) return;

    setInputValue( " " );
    onNewCategory( inputValue.trim() );
  }

  return (
    <form onSubmit={  ( event => onSubmit( event ) )}>

      <input
        type = "text"
        placeholder= "Busca un gif"
        value = { inputValue }
        onChange = { (event) => onInputChange( event ) }
      />

    </form>
    
  )
}

export {AddCategory}
