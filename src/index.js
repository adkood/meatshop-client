// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import store from './store';
// import { Provider } from 'react-redux';
// import { ChakraProvider } from '@chakra-ui/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ChakraProvider>
//     <Provider store={store}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Provider>
//   </ChakraProvider>
// );

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import wakeUpServer from './utils/wakeUpServer';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div role='status'>
      <span style={{ fontSize: "1.5rem"}}>Collecting Info...</span>
    </div>
  </div>
);

const StartApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const serverWakeupSuccess = await wakeUpServer();
      setLoading(false);
      if (!serverWakeupSuccess) {
        console.error('Failed to wake up server. Please try again later.');
      }
    };

    initializeApp();
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <ChakraProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<StartApp />);
