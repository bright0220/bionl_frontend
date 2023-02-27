import React, { createContext, useState } from "react";

type EditContextProps = {
  editState: EditState;
  setEditState: (editState: EditState) => void;
};

type EditState = {
  isEdit: boolean;
  isSave: boolean;
};

const defaultEditState: EditState = {
  isEdit: false,
  isSave: false,
};

const EditContext = createContext<EditContextProps>({
  editState: defaultEditState,
  setEditState: ({ ...defaultEditState }) => defaultEditState,
});

const EditProvider: React.FC = ({ children }) => {
  const [editState, setEditState] = useState<EditState>({
    isEdit: false,
    isSave: false,
  });

  const setEditInfo = ({ isEdit, isSave }: EditState) => {
    setEditState({
      isEdit,
      isSave,
    });
  };

  return (
    <EditContext.Provider
      value={{
        editState,
        setEditState: (editState: EditState) => setEditInfo(editState),
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export { EditContext, EditProvider };
