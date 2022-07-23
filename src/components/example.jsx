import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Главная",
    "Блог",
    "Контакты",
  ]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (id)=> {
    console.log(id)
  }

  const renderMenu =()=> {
    return (open && (
        <ul className="list-group">
          {menuItems.map((item) => (
            <li key={item} className='list-group-item' onClick={()=>handleItemClick(item)}>{item}</li>
          ))}
        </ul>
      ))

  }

  //arrow up 
  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
     />
    </svg>
  );

  //arrow down 
  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      />
    </svg>
  );

  const renderArrow = () => {
    return open ? arrowDown : arrowTop;
  };

  return (
    <div>
      <button
        className="btn btn-sm btm-primary"
        onClick={handleMenuClick}
      >
        меню
        {renderArrow()}
      </button>
        {renderMenu()}
    </div>
  );
};

export {Navbar}