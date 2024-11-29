import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
const dataUrl = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = projects.length > 0 ? Math.ceil(projects.length / recordsPerPage) : 1;

  const handleNextPage = () => {
    console.log("Next button clicked");
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage + 1;
        document.querySelector(".pagination span").focus(); 
        return newPage;
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        const newPage = prevPage - 1;
        document.querySelector(".pagination span").focus(); 
        return newPage;
      });
    }
  };

  return (
    <div className="App">
      <h1>SaasLabs Assignment</h1>
      {projects.length > 0 ? (
        <>
          <Table records={currentRecords} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
};

export default App;
