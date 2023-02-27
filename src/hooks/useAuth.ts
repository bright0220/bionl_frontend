import React from "react";

import { AuthContext } from "../contexts";

export const useAuth = () => {
  return React.useContext(AuthContext);
};
