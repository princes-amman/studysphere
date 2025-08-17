import React, { useState } from "react";
import "../styles/SubjectNamePage.css";

const subjects = [
  { name: "HTML", description: "Markup language for web pages" },
  { name: "CSS", description: "Style sheets for web design" },
  { name: "JavaScript", description: "Programming language for web apps" },
  { name: "React", description: "JavaScript library for UI development" },
  { name: "Python", description: "Popular language for general programming" },
  { name: "Java", description: "Object-oriented programming language" },
  { name: "C++", description: "High-performance programming language" },
  { name: "SQL", description: "Database query language" },
];

function SubjectNamePage() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter subjects by search text
  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Show all matches when searching, else paginate
  const visibleSubjects =
    searchText.trim() === ""
      ? filteredSubjects.slice(startIndex, startIndex + itemsPerPage)
      : filteredSubjects;

  return (
    <div className="subject-page">
      <h1>Choose a Subject</h1>

      {/* Search input directly here */}
      <input
        type="text"
        placeholder="Search for a subject..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setCurrentPage(1); // reset to first page when searching
        }}
        style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
      />

      <div className="subject-list">
        {visibleSubjects.map((subject, index) => (
          <div key={index} className="subject-card">
            <h2>{subject.name}</h2>
            <p>{subject.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination only when not searching */}
      {searchText.trim() === "" && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            ⬅ Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default SubjectNamePage;
