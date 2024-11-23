import { useEffect, useState } from "react";
import "../styles/Idol.css";

const Idol = () => {
  const [idolData, setIdolData] = useState(null);
  const [groupData, setGroupData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [itemsPerPage] = useState(18); // Menampilkan 18 idol per halaman
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Fungsi untuk mengambil data dari API
  const fetchData = async () => {
    const url = "https://juanritonga.github.io/idols_kpop_api/idols_kpop.json"; // URL untuk file JSON
    try {
      const response = await fetch(url);
      const result = await response.json();

      // Set data idols dan groups
      setIdolData(result.idols || []);
      setGroupData(result.groups || []);

      // Simulasikan waktu loading selama 3 detik
      setTimeout(() => {
        setLoading(false); // Set loading false setelah 3 detik
      }, 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  // Ambil data saat komponen dimuat
  useEffect(() => {
    fetchData();
  }, []); // Hanya dipanggil sekali saat komponen pertama kali dimuat

  // Fungsi untuk mencari nama grup berdasarkan groupId
  const getGroupName = (groupId) => {
    const group = groupData.find((g) => g.id === groupId); // Mencari grup dengan ID yang cocok
    return group ? group.name : "Unknown Group"; // Mengembalikan nama grup atau "Unknown Group"
  };

  // Filter idolData based on search query
  const filteredIdolData = idolData
    ? idolData.filter((idol) =>
        idol.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Fungsi untuk mendapatkan idol yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentIdols = filteredIdolData
    ? filteredIdolData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total halaman yang tersedia
  const totalPages = filteredIdolData
    ? Math.ceil(filteredIdolData.length / itemsPerPage)
    : 0;

  // Fungsi untuk menghasilkan tombol pagination secara responsif
  const renderPaginationButtons = () => {
    const visiblePages = 5; // Jumlah tombol halaman yang ingin ditampilkan
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

      {/* Search Form */}
      <div className="search-container mb-4">
        <form
          className="d-flex"
          onSubmit={(e) => e.preventDefault()} // Prevent form submit to reload the page
        >
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search by Idol name..."
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
        <p className="loading-text">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading idol data...
        </p>
      ) : (
        <div>
          {idolData && groupData ? (
            Array.isArray(filteredIdolData) ? (
              <>
                <div className="row row-cols-3 row-cols-md-3 g-5">
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
                            {idol.groups
                              .map((groupId) => getGroupName(groupId)) // Menggunakan fungsi getGroupName untuk mendapatkan nama grup
                              .join(", ")}
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

                {/* Pagination Buttons */}
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
              <p>No idol data available</p>
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
