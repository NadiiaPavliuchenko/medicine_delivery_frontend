import { FlexContainer, FiltersButton } from "./Filters.styled";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Filters = ({
  price,
  date,
  onPriceChange,
  onDateChange,
  onDropFilters,
}) => {
  return (
    <FlexContainer>
      <div>
        <FormControl sx={{ m: 1, width: 152 }} size="small">
          <InputLabel id="label-price">Price</InputLabel>
          <Select
            id="select-price"
            value={price}
            label="Price"
            onChange={onPriceChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="desc">by descending price</MenuItem>
            <MenuItem value="asc">by increasing price</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 152 }} size="small">
          <InputLabel id="label-date">Date</InputLabel>
          <Select
            id="select-date"
            value={date}
            label="Date"
            onChange={onDateChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="desc">newest to oldest</MenuItem>
            <MenuItem value="asc">oldest to newest</MenuItem>
          </Select>
        </FormControl>
      </div>
      <FiltersButton type="button" onClick={onDropFilters}>
        Drop Filters
      </FiltersButton>
    </FlexContainer>
  );
};

export default Filters;
