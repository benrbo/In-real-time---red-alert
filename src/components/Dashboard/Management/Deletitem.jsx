import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export async function deleteStudent(id) {
  const response = await fetch(`/redalerts/${id}`, {
    method: "DELETE",
  });
  return response.json();
}


export default class Deletitem extends React.Component {



  render() {
    return (
      <div>
        <button onClick={this.deleteStudent} ><DeleteIcon /></button>
      </div>
    )
  }
}
