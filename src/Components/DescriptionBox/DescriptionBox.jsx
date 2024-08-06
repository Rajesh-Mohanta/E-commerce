import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          tempora delectus officiis quibusdam quas magnam maiores laborum
          repellendus rem sed non dolore eius nam, ut, accusantium rerum hic
          fugiat, provident deleniti expedita ad ratione? Facilis vitae maxime
          eius magnam ipsam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          doloremque reprehenderit cupiditate architecto sunt eveniet, sit at
          harum ex exercitationem.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
