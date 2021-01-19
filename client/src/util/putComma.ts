import React from 'react';

const putComma = (moneyValue: number): string => {
  return moneyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default putComma;
