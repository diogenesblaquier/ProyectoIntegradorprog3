import React from 'react';


function Header() {
    return (
        <header>
        <img className="logo" src="" alt="" />
        <section className="right-nav">
          <p>Ordenar ASC/ DESC</p>
          <i className="fas fa-th"></i>
          <i className="fas fa-align-justify"></i>
          <form action="">
            <input type="text" name="search" id="" placeholder="Search" />
              <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </section>
      </header>
    )
}

export default Header