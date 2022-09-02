import React, { useState } from "react";
import type { IPreset } from "../Main";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

type IListOfPresets = {
  listOfPresets: IPreset[];
  onFieldChoise: (field: string) => void;
};

export function SearchBlock({ listOfPresets, onFieldChoise }: IListOfPresets) {
  const [present, setPresent] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPresent(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
        <InputLabel id="demo-simple-select-label">Pick mode</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={present}
          label="Pick mode"
          input={<OutlinedInput label="Pick mode" />}
          onChange={handleChange}
        >
          {listOfPresets.map((present: IPreset) => (
            <MenuItem key={present.name} value={present.field}>
              {present.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={() => onFieldChoise(present)}
        variant="contained"
        sx={{ m: 2 }}
        disabled={!present}
      >
        start
      </Button>
    </>
  );
}
