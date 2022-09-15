import { useState } from 'react';
import TableRows from './TableRows';

export default function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = () => {
    const rowsInput = {
      fullName: '',
      emailAddress: '',
      salary: '',
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  return (
    <div className="container">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
          </tbody>
          <button onClick={addTableRows} className="btn btn-outline-success">
            + 행추가
          </button>
        </table>
      </div>
    </div>
  );
}
