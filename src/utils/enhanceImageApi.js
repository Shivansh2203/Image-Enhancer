import axios from 'axios';

const API_Key = "wx7oeidbisr46q4cs";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhanceImageAPI = async (file) => { 
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID:", taskId);
    
    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);
    
    return enhancedImageData; 
  } catch (error) {
    console.log("Error enhancing image:", error.message);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_Key,
    },
  });

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }

  return data.data.task_id; 
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-KEY": API_Key,
    },
  });

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) { 
    console.log("Processing...");
    if (retries >= 10) {
      throw new Error("Max retries reached. Please try again later.");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL:", result.image);
  return result;
};
