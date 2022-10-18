import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bottom-0 flex justify-center pb-6 pt-10">
      <p className="mx-auto text-center">
        <span className="text-secondary">{`©2019-${currentYear} Jens Mühlstedt`}</span>
      </p>
    </footer>
  );
};

export default Footer;
