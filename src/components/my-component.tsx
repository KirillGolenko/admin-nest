/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Input } from '@adminjs/design-system';
import { H3 } from '@adminjs/design-system';
import { ApiClient } from 'adminjs';

interface IState {
  email: string;
}

const Action = props => {
  const { record, resource } = props;
  const api = new ApiClient();
  const [item, setItem] = useState({
    email: '',
    content: {},
  });
  const changed = (e): void => {
    setItem({
      ...item,
      email: e.target.value,
      content: { id: 1, name: 'text' },
    });
    console.log(item);
  };

  const saved = async () => {
    const result = await api.recordAction({
      recordId: record.id,
      resourceId: resource.id,
      actionName: 'edit',
      data: item,
    });
    console.log(result);
  };

  useEffect(() => {
    setItem(record.params);
  }, []);
  return (
    <Box>
      <H3>{record.params.name}</H3>
      <H3>{record.params.email}</H3>
      <Input id="input1" value={item.email} onChange={e => changed(e)} />
      <Button label="Save" onClick={() => saved()} />
    </Box>
  );
};

export default Action;
