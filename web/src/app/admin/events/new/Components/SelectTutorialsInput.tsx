'use client';

import {  Select, SelectItem } from '@nextui-org/react';

const SelectTutorialsInput = ({ tutorials }) => {
  return (
    <Select
      radius="none"
      label="Tutorials"
      name="tutorials"
      multiple
    >
      {tutorials.map((tutorial) => (
        <SelectItem
          key={tutorial._id}
          value={tutorial._id}
        >
          {tutorial.name}
        </SelectItem>
      ))}
    </Select>
  );
};


export default SelectTutorialsInput;
