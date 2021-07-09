import { Box } from '@adminjs/design-system';
import { ApiClient } from 'adminjs';
import * as React from 'react';
import { useState, useEffect } from 'react';

const api = new ApiClient();

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    api.getDashboard().then(response => {
      setData(response.data);
    });
    console.log(data);
  }, []);

  return (
    <Box variant="grey">
      <Box variant="white">some: </Box>
    </Box>
  );
};

export default Dashboard;
