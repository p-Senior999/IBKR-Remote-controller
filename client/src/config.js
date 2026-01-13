// In Create React App, environment variables are automatically loaded from .env files
// Variables must be prefixed with REACT_APP_ to be exposed to the browser
export const config = {
  Main_Endpoint: process.env.REACT_APP_MAIN_API_URL || 'http://localhost:5000',
};