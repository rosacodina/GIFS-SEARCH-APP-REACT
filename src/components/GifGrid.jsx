import PropTypes from "prop-types";
import {GifItem} from "./GifItem";
import { useFetchGifs } from "../components/hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      <h3> { category } </h3>
      {
        isLoading && ( <h3>Cargando...</h3> )
      }
      

      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.protoTypes = {
  category: PropTypes.string.isRequired,
}

export {GifGrid};
