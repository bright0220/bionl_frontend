import React from "react";

import { EditContext } from "../contexts";

export const useEdit = () => {
  return React.useContext(EditContext);
};
