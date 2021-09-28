import React from 'react';
import BubbleSort from './BubbleSort';
import CocktailSort from './CocktailSort';
import SelectionSort from './SelectionSort';

const AllSort = () => {
  return (
    <div>
      <BubbleSort />
      <CocktailSort />
      <SelectionSort />
    </div>
  );
};

export default AllSort;
