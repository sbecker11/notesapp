import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import App from './App.jsx'
import './index.css'

// Configure Amplify with the aws-exports configuration
Amplify.configure(awsconfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
