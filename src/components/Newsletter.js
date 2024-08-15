import axios from 'axios'; // Import axios
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    if (formStatus.success) clearFields();
  }, [formStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setFormStatus({ ...formStatus, status: 'sending' });
      try {
        const response = await axios.post("http://localhost:8080/newsLetter", { email }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        console.log("Response from server:", response.data);
        
        if (response.data.code === 200) { // Check response code as per backend
          setFormStatus({ success: true, message: response.data.message });
        } else {
          setFormStatus({ success: false, message: response.data.message || 'An unexpected error occurred.' });
        }
      } catch (error) {
        console.error("Error while sending data to the server:", error);
        setFormStatus({ success: false, message: error.response?.data?.message || 'An unexpected error occurred.' });
      }
    } else {
      setFormStatus({ success: false, message: 'Please enter a valid email address.' });
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {formStatus.status === 'sending' && <Alert>Sending...</Alert>}
            {formStatus.success === false && <Alert variant="danger">{formStatus.message}</Alert>}
            {formStatus.success === true && <Alert variant="success">{formStatus.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
