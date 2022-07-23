import React from 'react';

export const Inputs = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      minLength={1}
      placeholder={placeholder}
      onChange={onChange}
      class="mt-10 border-2 border-black w-full h-14 rounded-sm p-2"
    />
  );
}