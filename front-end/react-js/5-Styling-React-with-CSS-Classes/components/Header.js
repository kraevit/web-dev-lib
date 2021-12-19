import React from "react";

function Header() {
  return (
    // className can only be applied to React Elements! NOT React Components as <Header />
    <header className="navbar">
      this is the Header
    </header>
  )
}

export default Header;