import React from "react";

const ReadOnlyRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.image}</td>
      <td>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
