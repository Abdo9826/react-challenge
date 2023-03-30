import React, { useState } from "react";

function App() {
  const [rows, setRows] = useState([{ sign: "+", value: 0, isEnabled: true }]);
  
  const addRow = () => {
    setRows([...rows, { sign: "+", value: 0, isEnabled: true }]);
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const getTotal = () => {
    let total = 0;
    rows.forEach((row) => {
      if (row.isEnabled) {
        total += row.sign === "+" ? row.value : -row.value;
      }
    });
    return total;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sign</th>
            <th>Value</th>
            <th>Enabled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <select
                  value={row.sign}
                  onChange={(event) =>
                    handleChange(index, "sign", event.target.value)
                  }
                >
                  <option value="+">+</option>
                  <option value="-">-</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={row.value}
                  onChange={(event) =>
                    handleChange(index, "value", Number(event.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={row.isEnabled}
                  onChange={(event) =>
                    handleChange(index, "isEnabled", event.target.checked)
                  }
                />
              </td>
              <td>
                <button onClick={() => removeRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <div>Total: {getTotal()}</div>
    </div>
  );
}

export default App;
