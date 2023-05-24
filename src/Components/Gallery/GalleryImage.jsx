// eslint-disable-next-line react/prop-types
function GalleryImage({ image }) {
  return (
    <div>
      <div>{image ? <img src={image} /> : null}</div>
    </div>
  );
}

export default GalleryImage;
