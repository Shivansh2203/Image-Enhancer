import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import { enhanceImageAPI } from '../utils/enhanceImageApi';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhanceImage, setEnhanceImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedData = await enhanceImageAPI(file);
      setEnhanceImage(enhancedData); // this includes .image
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  console.log(enhanceImage?.image); 

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview 
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhanceImage?.image} 
      />
    </>
  );
};

export default Home;
