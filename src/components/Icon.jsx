import React, { useState } from "react";
import { Select, MenuItem, FormControl } from "@material-ui/core";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function Icon() {
  const [selectedIcon, setSelectedIcon] = useState("image"); // Default selected icon

  const handleChange = (event) => {
    setSelectedIcon(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="icon-dropdown-label"
          id="icon-dropdown"
          value={selectedIcon}
          onChange={handleChange}
          style={{ border: "none" }}
          disableUnderline={true}
        >
          <MenuItem value="image">
            <AcUnitIcon />
          </MenuItem>
          <MenuItem value="face">
            <AccountBalanceIcon />
          </MenuItem>
          <MenuItem value="business">
            <AccountBalanceWalletIcon />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Icon;
