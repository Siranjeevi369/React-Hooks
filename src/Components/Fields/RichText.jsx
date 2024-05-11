import React, { useState } from 'react';
import { TextField } from '@mui/material';

const RichText = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  console.log();

  return (
    <TextField
      multiline
   
      placeholder="Enter text here..."
      value={value}
      onChange={handleInputChange}
      onPaste={handlePaste}
    />
  );
};

export default RichText;
