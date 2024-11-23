import { useEffect, useState } from "react";
import "../styles/Information.css";

const Information = () => {
  const [idolData, setIdolData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [itemsPerPage] = useState(6); // Number of groups per page
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [filteredGroups, setFilteredGroups] = useState([]); // State to store filtered groups

  const getInformation = async () => {
    const url = 'https://juanritonga.github.io/idols_kpop_api/idols_kpop.json'; // URL to JSON
    try {
      const response = await fetch(url);
      const result = await response.json(); // Parsing response to JSON
      setIdolData(result); // Storing idol data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Get idol name based on idol_id
  const getIdolName = (idolId) => {
    const idol = idolData?.idols.find(idol => idol.id === idolId);
    return idol ? idol.name : "Unknown Idol";
  };

  useEffect(() => {
    // Start the fetch data request
    getInformation();

    // Set loading state for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  useEffect(() => {
    if (idolData) {
      // Filter groups based on search query
      const filtered = idolData.groups.filter(group => 
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.agency_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.members.some(member => getIdolName(member.idol_id).toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredGroups(filtered);
    }
  }, [searchQuery, idolData]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGroups = filteredGroups.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);

  // Pagination Buttons
  const renderPaginationButtons = () => {
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    const buttons = [];
    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={`btn btn-sm ${page === currentPage ? "btn-primary" : "btn-outline-primary"} mx-1`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="information-container container mt-5">
      <h2 className="group-title">List of Groups</h2>

      {/* Search Form */}
      <div className="search-container mb-4">
        <form
          className="d-flex"
          onSubmit={(e) => e.preventDefault()} // Prevent form submit to reload the page
        >
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search by group name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
            aria-label="Search"
          />
          <button className="btn btn-outline-dark btn-sm ms-2" type="submit">
            Search
          </button>
        </form>
      </div>


      {loading ? (
        <div className="loading-text text-center mb-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading group data...
        </div>
      ) : idolData ? (
        filteredGroups.length > 0 ? (
          <>
<div className="row row-cols-3 row-cols-md-3 g-4">
                  {currentGroups.map((group, index) => (
                <div key={index} className="col">
                  <div className="group-card card shadow-lg h-100">
                    <img
                      src={group.thumb_url}
                      className="card-img-top"
                      alt={group.name}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title group-name">{group.name}</h5>
                      <p className="card-text"><strong>Agency :</strong> {group.agency_name}</p>
                      <p className="card-text"><strong>Debut Date :</strong> {group.debut_date}</p>
                      <h6>Members :</h6>
                      <ul className="members-list">
                        {group.members.map((member, idx) => (
                          <li key={idx}>{getIdolName(member.idol_id)}</li>
                        ))}
                      </ul>
                      <div className="d-flex justify-content-between mt-auto">
                        <a href={group.urls[0]} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">More Info</a>
                        <a href={group.urls[1]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Official Page</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="pagination d-flex justify-content-center mt-4 mb-4">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {renderPaginationButtons()}
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>No group data found matching your search criteria.</p>
        )
      ) : (
        <p>Error loading data. Please try again later.</p>
      )}
    </div>
  );
};

export default Information;
