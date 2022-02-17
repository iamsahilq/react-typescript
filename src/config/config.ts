const config = {
  defaults: {
    namespace: 'Application',
  },
};
const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL };
export default config;
