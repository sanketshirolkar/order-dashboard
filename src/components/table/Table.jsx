import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import "./table.css";

const Table = ({ rows, data }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [filteredDataPinCode, setFilteredDataPinCode] = useState([]);  
  const [filteredDataDate, setFilteredDataDate] = useState([]);

  const handleFilterPinCode = () => {
    let newData = data;
    if (searchKey) {
      newData = data?.filter((searchData) => {
        if (
          searchData?.deliveryPincode
            ?.toLowerCase()
            .includes(searchKey.toLowerCase())
        ) {
          return searchData;
        }
      });
    }

    setFilteredDataPinCode(newData);
  };

  const handleFilterDate = () => {
    let newData = filteredDataPinCode;
    if (searchDate) {
      newData = filteredDataPinCode?.filter((searchData) => {
        if (
          searchData?.orderDate
            ?.includes(searchDate)
        ) {
          return searchData;
        }
      });
    }

    setFilteredDataDate(newData);
  };

  const handleFilter = () => {
    let newFiltData = [];

      if(filteredDataPinCode.length > 0 ) {
         newFiltData = filteredDataPinCode;
      }
      setFilteredData(newFiltData);
      
      if(filteredDataDate.length > 0) {
        newFiltData =  filteredDataDate;
      }

      setFilteredData(newFiltData);
  }

  useEffect(() => {
    handleFilterPinCode();
    handleFilterDate();
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchKey, searchDate, filteredDataDate, filteredDataPinCode]);

  return (
    <div className="table-container">
      <h3 style={{ textAlign: "center" }}>Order Dashboard</h3>

      <div className="input-container">
        <Input
          type="text"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          placeholder="Pin Code"
        />
        <Input
          type="text"
          value={searchDate}
          onChange={(e) => {
            setSearchDate(e.target.value);
          }}
          placeholder="Date (dd/mm/yyyy)"
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <table>
          <thead>
            <tr>
              {rows.map((rowHeaderItems) => (
                <th key={rowHeaderItems.index}>
                  <div>{rowHeaderItems.title}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>


            {filteredData.map((dataItem) => (
              <tr key={dataItem.orderid}>
                {rows.map((row) => (
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
