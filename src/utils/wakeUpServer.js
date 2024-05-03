const wakeUpServer = async () => {
    try {
        let url = 'https://meatshop-server.onrender.com/api/outlets';
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
  