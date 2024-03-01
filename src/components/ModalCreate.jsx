import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCreate() {
  const [formData, setFormData] = useState({
    Name: "",
    Day: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "Day" ? parseInt(value, 10) : value //convert the int
    setFormData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://gofiber-production.up.railway.app/api/v1/month/create",
        formData
      );
      alert("berhasil");
      handleClose();
      window.location.reload(); 
    } catch (error) {
      alert("Error posting month.");
      console.error(error);
    }
  };
  
  

  const handleClose = () => {
    setShowModal(false); 
    
  };

  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Month
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Name :</p>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <p>Day :</p>
            <input
              type="number"
              name="Day"
              value={formData.Day}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type="submit">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreate;
