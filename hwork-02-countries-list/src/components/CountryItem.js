import { useState } from "react";

import Input from "./Input";

const CountryItem = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");

  const { name, id, onCountryDelete, onCountryEdit } = props;

  const editingHandler = isEditing => {
    if (isEditing) {
      setIsEditing(false);
      onCountryEdit(id, editedName);
      setEditedName("");
    }
    if (!isEditing) {
      setIsEditing(true);
      setEditedName(name);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {isEditing ? (
        <Input value={editedName} onChange={setEditedName} />
      ) : (
        <div className="fs-3">{name}</div>
      )}

      <div className="d-flex m-2">
        <button
          onClick={() => editingHandler(isEditing)}
          className={
            isEditing ? "btn btn-success me-2" : "btn btn-warning me-2"
          }
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="btn btn-danger" onClick={() => onCountryDelete(id)}>
          X
        </button>
      </div>
    </li>
  );
};

export default CountryItem;
