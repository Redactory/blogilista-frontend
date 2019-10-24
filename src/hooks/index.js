import { useState } from 'react';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const changeValue = (value) => {
    setValue(value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    type,
    value,
    onChange,
    changeValue,
    reset
  };
};

export default useField;
