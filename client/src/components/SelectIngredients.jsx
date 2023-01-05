import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectIngredients = ({ ingredients, setIngredientsInRecipe }) => {
  const [ingredientsName, setIngredientsName] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;

    let newIngreientsNames;
    if (ingredientsName?.indexOf(value.at(-1).name) > -1) {
      newIngreientsNames = ingredientsName.filter(
        (ing) => ing !== value.at(-1).name
      );
      setIngredientsInRecipe((curr) =>
        curr.filter((ing) => ing.id !== value.at(-1).id)
      );
    } else {
      newIngreientsNames = [...ingredientsName];
      newIngreientsNames.push(value.at(-1).name);
      setIngredientsInRecipe((curr) => [...curr, value.at(-1)]);
    }
    setIngredientsName(newIngreientsNames);
  };
  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <InputLabel id='demo-multiple-checkbox-label'>Ingredients</InputLabel>
      <Select
        labelId='demo-multiple-checkbox-label'
        id='demo-multiple-checkbox'
        multiple
        value={ingredientsName}
        onChange={handleChange}
        input={<OutlinedInput label='Tag' />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {ingredients?.map((ing, idx) => (
          <MenuItem key={idx} value={ing}>
            <Checkbox checked={ingredientsName?.indexOf(ing.name) > -1} />
            <ListItemText primary={ing.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectIngredients;
