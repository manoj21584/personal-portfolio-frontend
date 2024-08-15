import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const handleClick = () => {
    if (title === "Book Store App") {
      window.open("https://github.com/manoj21584/Fullstack-LibraryManagementSystem", "_blank");
    } else if (title === "Employee-Management-system") {
      window.open("https://github.com/manoj21584/Fullstack-EmployeeManagementSystem", "_blank");
    }
    else if(title==="spring-security-app"){
      window.open("https://github.com/manoj21584/securityApp","_blank")
    }
    else if(title==="microservices"){
      window.open("https://github.com/manoj21584/microservicesApp","_blank")
    }
    else if(title==="bank-app"){
      window.open("https://github.com/manoj21584/EasyBank-Fullstack","_blank")
    }else{
      window.open("https://github.com/manoj21584/event-driven-microservices","_blank")
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
        <div className="proj-imgbx" style={{ cursor: 'pointer' }}>
          <img src={imgUrl} alt="Project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </button>
    </Col>
  );
};
