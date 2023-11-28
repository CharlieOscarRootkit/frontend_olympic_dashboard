

const CroppedImage = ({ imageUrl }) => {
  return (
    <div style={{ width: '20px', height: '30px', position: 'relative', overflow: 'hidden' }}>
      <Image
        src={imageUrl}
        alt="Cropped Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
      />
    </div>
  );
};

export default CroppedImage;
