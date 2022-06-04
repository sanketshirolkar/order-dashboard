import React, {useState} from "react";
import "./table.css";

const Table = ({rows, data}) => {

    const [searchKey, setSearchKey] = useState("");

  return (
    <div>
        <input
            type="text"
            placeholder="Search..."
            value={searchKey}
            onChange = {(e) => {setSearchKey(e.target.value);}}
        
        />

        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        {rows.map((rowHeaderItems) => (
                            <th key={rowHeaderItems.index}><div>{rowHeaderItems.title}</div></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem) => (
                        <tr key={dataItem.orderid}>
                            {rows.map((row, key) => (
                                <td key={row.index}>{row.render(dataItem)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    </div>
  );
};

export default Table;