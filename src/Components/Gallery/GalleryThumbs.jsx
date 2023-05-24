/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
function GalleryThumbs({ images, selectImage }) {
  
    const dispatch = useDispatch()
  return (
    <div className="image-scroller">
      {images.map((image, i) => (
        <div key={i} onClick={() => dispatch(selectImage(image))}>
          <img src={image} />
        </div>
      ))}
    </div>
  );
}

export default GalleryThumbs;
