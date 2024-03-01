import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalEdit({Name,Day,ID}) {
    const [data, setData] = useState({
        Name,
        Day
    });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === "Day" ? parseInt(value, 10) : value //convert the int
        setData((prevState) => ({
          ...prevState,
          [name]: parsedValue,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`https://gofiber-production.up.railway.app/api/v1/month/update/${ID}`, data)
          .then(() => {
            alert("berhasil")
            handleClose()
            window.location.reload();
          })
          .catch((error) => console.log(error));
      };

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name :</p>
                        <input type="text" name="Name" value={data.Name} onChange={handleChange} />
                        <p>Day :</p>
                        <input type="number" name="Day" value={data.Day} onChange={handleChange} />
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

export default ModalEdit;