import React from "react";

interface Burger {
  open: boolean;
  setOpen: () => void;
}

const Burger: React.FC<Burger> = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen()}
      style={{ top: "0.4rem", right: "1.2rem" }}
      className="absolute flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer z-50"
    >
      <span
        className={`styled-burger-bar ${
          open ? "transform rotate-45 bg-black" : "transform rotate-0"
        }`}
      ></span>
      <span
        className={`styled-burger-bar ${
          open ? " opacity-0 bg-black" : "opacity-100"
        }`}
      ></span>
      <span
        className={`styled-burger-bar ${
          open ? "transform -rotate-45 bg-black" : "transform rotate-0"
        }`}
      ></span>
    </div>
  );
};

export default Burger;
