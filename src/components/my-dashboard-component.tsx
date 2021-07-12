import { Box } from '@adminjs/design-system';
import { ApiClient } from 'adminjs';
import * as React from 'react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({
    some: '',
  });
  const api = new ApiClient();

  useEffect(() => {
    api.getDashboard().then(response => {
      setData({ ...data, some: response.data.some });
    });
  }, []);

  return (
    <Box variant="grey">
      <Box variant="white">some: {data.some}</Box>
    </Box>
  );
};

export default Dashboard;
