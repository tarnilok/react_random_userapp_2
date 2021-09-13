import React, { useState } from "react";
import "../design/buttonandTable.css";

function ButtonandTable({ apiFetcher, fetchPerson, loading }) {
  const [showTable, setShowTable] = useState(false)  
  const [addListToTable, setAddListToTable] = useState([]);

  const addInfoArray = () => {
    setAddListToTable([...addListToTable, {
        Firstname : `${fetchPerson?.name?.first} ${fetchPerson?.name?.last}`,
        Email : fetchPerson?.email,
        Phone : fetchPerson?.phone,
        Age : fetchPerson?.dob?.age
    }])
  };
  return (
    <>
      <div className="buttons">
        <button className="newuser button" onClick={apiFetcher}>{loading ? "NEW USER" : "Loading..."}</button>
        <button className="adduser button" onClick={() => {
            addInfoArray(); 
            setShowTable(true);
        }}>ADD USER</button>
      </div>
      <table className="table">
        {showTable 
        ?
        <thead>
            <tr className="title" >
                <th>Firstname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
            </tr>
        </thead>
        :
        null
        }
        <tbody>
            {addListToTable.map((info, index) => (
                <tr key={index}>
                    <td>{info.Firstname}</td>
                    <td>{info.Email}</td>
                    <td>{info.Phone}</td>
                    <td>{info.Age}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ButtonandTable;
