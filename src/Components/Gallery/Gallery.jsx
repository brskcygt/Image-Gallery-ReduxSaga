import { useSelector } from "react-redux";
import GalleryImage from "./GalleryImage";
import GalleryThumbs from "./GalleryThumbs";
import { GalleryActions } from "./Store/Gallery.slice";

function Gallery() {
  const images = useSelector((s) => s.Gallery.images);
  const selectedImage = useSelector((s) => s.Gallery.selectedImage);

  return (
    <>
      <div className="image-gallery">
        <GalleryImage image={selectedImage} hidden={!selectedImage} />
        <GalleryThumbs
          selectImage={GalleryActions.setSelected}
          images={images}
        />
      </div>
    </>
  );
}

export default Gallery;
