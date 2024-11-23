import { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/Match.css'; // Import CSS untuk animasi dan styling tambahan
import 'animate.css';

const Match = () => {
  const [uploadedImages, setUploadedImages] = useState([null, null]);
  const [names, setNames] = useState(["", ""]);
  const [matchPercentage, setMatchPercentage] = useState(null);
  const [error, setError] = useState("");
  const [isMatchCalculated, setIsMatchCalculated] = useState(false);

  // Fungsi untuk menangani upload gambar
  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...uploadedImages];
        updatedImages[index] = reader.result;
        setUploadedImages(updatedImages); // Menyimpan gambar yang di-upload
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk menangani input nama
  const handleNameChange = (event, index) => {
    const updatedNames = [...names];
    updatedNames[index] = event.target.value;
    setNames(updatedNames); // Menyimpan nama yang di-input
  };

  // Fungsi untuk memulai perhitungan persentase kecocokan
  const calculateMatch = () => {
    if (!names[0] || !names[1] || !uploadedImages[0] || !uploadedImages[1]) {
      setError("Nama dan Foto Jangan Kosong JOMBLO NGENES!");
      return;
    }
    setError(""); // Reset error
    const randomMatch = Math.floor(Math.random() * 101); // Random antara 0-100
    setMatchPercentage(randomMatch); // Menampilkan persentase kecocokan
    setIsMatchCalculated(true); // Mencegah tombol ditekan lagi
  };

  // Fungsi untuk mereset semua data
  const resetMatch = () => {
    setUploadedImages([null, null]);
    setNames(["", ""]);
    setMatchPercentage(null);
    setError("");
    setIsMatchCalculated(false);
  };

  return (
    <Container className="text-center mt-3 bg-light p-2 rounded shadow-lg mb-5">
      <h1 className="mb-4 text-danger font-weight-bold">Cocok Cocokan ❤️</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="photo1">
            <Form.Label>Upload Photo U</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 0)}
              className="mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Enter Name 1"
              value={names[0]}
              onChange={(e) => handleNameChange(e, 0)}
              className="mb-3"
            />
            {uploadedImages[0] && (
              <img
                src={uploadedImages[0]}
                alt="Uploaded 1"
                className="img-fluid mb-3 rounded-circle border border-3 border-danger"
                width="200"
              />
            )}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="photo2">
            <Form.Label>Upload Photo Jodohmu</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 1)}
              className="mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Enter Name 2"
              value={names[1]}
              onChange={(e) => handleNameChange(e, 1)}
              className="mb-3"
            />
            {uploadedImages[1] && (
              <img
                src={uploadedImages[1]}
                alt="Uploaded 2"
                className="img-fluid mb-3 rounded-circle border border-3 border-danger"
                width="200"
              />
            )}
          </Form.Group>
        </Col>
      </Row>

      {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

      <Button
        variant="danger"
        onClick={calculateMatch}
        className="mb-4 py-3 px-5 font-weight-bold shadow-lg animate__animated animate__bounceIn"
        disabled={isMatchCalculated}
      >
        💖 Start Soulmate 💖
      </Button>

      {matchPercentage !== null && (
        <div className="match-result mt-4 animate__animated animate__fadeIn mb-3">
          <h2 className="mb-3 text-danger">Soulmate Percentage</h2>
          <Alert variant="success" className="animate__animated animate__jackInTheBox">
            {names[0]} and {names[1]} have{' '}
            <span className="match-percentage fs-3 text-danger font-weight-bold">
              {matchPercentage}%
            </span>{' '}
            Compatibility! 💖
          </Alert>
          <Button
        variant="secondary"
        onClick={resetMatch}
        className="mt-3 py-2 px-4 font-weight-bold shadow-lg"
      >
        🔄 Reset
      </Button>
        </div>
      )}
    </Container>
  );
};

export default Match;
