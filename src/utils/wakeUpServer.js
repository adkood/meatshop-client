const wakeUpServer = async () => {
  try {

    let url = ``;

    if (process.env.NODE_ENV === 'development') {
      url += process.env.REACT_APP_API_KEY_DEV;
    }
    else {
      url += process.env.REACT_APP_API_KEY_PROD;
    }

    url += '/api/outlets';
    const response = await fetch(url);

    if (response.ok) {
      console.log('Server woke up successfully!');
    } else {
      console.error('Failed to wake up server:', response.statusText);
    }
  } catch (error) {
    console.error('Error waking up server:', error.message);
  }
};

export default wakeUpServer;
