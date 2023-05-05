import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: '1', label: 'Opción 1', column: 'A' },
  { value: '2', label: 'Opción 2', column: 'A' },
  { value: '3', label: 'Opción 3', column: 'B' },
  { value: '4', label: 'Opción 4', column: 'B' },
];

const SelectMultiple = () => {
  const [selectedOptions, setSelectedOptions] = useState([{label: 'Opción 2'}]);

  const handleChange = (selected) => {
    console.log(selectedOptions);
    setSelectedOptions(selected);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
    }),
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      styles={customStyles}
      getOptionLabel={(option) => `${option.label} (${option.column})`}
      getOptionValue={(option) => option.value}
    />
  );
};

export default SelectMultiple;
