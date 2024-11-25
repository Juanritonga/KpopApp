import { useEffect, useState } from "react";
import "../styles/Idol.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Idol = () => {
  const [idolData, setIdolData] = useState(null);
  const [groupData, setGroupData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(18);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const url = "https://juanritonga.github.io/idols_kpop_api/idols_kpop.json";
    try {
      const response = await fetch(url);
      const result = await response.json();

      setIdolData(result.idols || []);
      setGroupData(result.groups || []);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getGroupName = (groupId) => {
    const group = groupData.find((g) => g.id === groupId);
    return group ? group.name : "Unknown Group";
  };

  const filteredIdolData = idolData
    ? idolData.filter((idol) =>
        idol.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentIdols = filteredIdolData
    ? filteredIdolData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = filteredIdolData
    ? Math.ceil(filteredIdolData.length / itemsPerPage)
    : 0;

  const renderPaginationButtons = () => {
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    const buttons = [];
    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={`btn btn-sm ${
            page === currentPage ? "btn-primary" : "btn-outline-primary"
          } mx-1`}
          onClick={() => paginate(page)}
        >
          {page}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="information-container container py-5">
      <h2 className="idol-title">List of Idols</h2>
  
      <div className="search-container mb-4">
        <form
          className="d-flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search by Idol name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <button className="btn btn-outline-dark btn-sm ms-2" type="submit">
            Search
          </button>
        </form>
      </div>
  
      {loading ? (
        <p className="loading-text">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading idol data...
        </p>
      ) : (
        <div>
          {idolData && groupData ? (
            idolData.length === 0 || groupData.length === 0 ? (
              <p>No idol or group data available</p>
            ) : Array.isArray(filteredIdolData) && filteredIdolData.length > 0 ? (
              <>
                <div className="row row-cols-md-3 row-cols-1 row-cols-sm-2  g-4">
                  {currentIdols.map((idol, index) => (
                    <div key={index} className="col">
                      <div className="card h-100 shadow-lg">
                        <img
                          src={idol.thumb_url}
                          alt={idol.name}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{idol.name}</h5>
                          <p className="card-text">
                            <strong>Real Name :</strong> {idol.real_name}
                          </p>
                          <p className="card-text">
                            <strong>Birthday :</strong> {idol.birth_date}
                          </p>
                          <p className="card-text">
                            <strong>Debut Date :</strong> {idol.debut_date}
                          </p>
                          <p className="card-text">
                            <strong>Groups :</strong>{" "}
                            {idol.groups.map((groupId) => getGroupName(groupId)).join(", ")}
                          </p>
                          <div>
                            {idol.urls &&
                              idol.urls.map((url, i) => (
                                <a
                                  key={i}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-link"
                                >
                                  More info
                                </a>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
  
                <div className="pagination d-flex justify-content-center mt-4">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  {renderPaginationButtons()}
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p>No idol matching your search</p>
            )
          ) : (
            <p>No group data available</p>
          )}
        </div>
      )}
    </div>
  );
  
};

export default Idol;
