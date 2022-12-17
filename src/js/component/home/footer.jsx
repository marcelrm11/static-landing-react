import React from "react";

function Footer({ year, text }) {
  return (
    <footer className="py-4 mt-4 bg-dark text-center text-light w-100">
      <p className="mb-0">
        © {year} {text}
      </p>
    </footer>
  );
}

export default Footer;
