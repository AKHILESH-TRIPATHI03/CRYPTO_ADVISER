import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Crypto-Advisers</div>
      <nav>
        <ul>
          <li>
            <Link to="/">CoinsDoc</Link>
          </li>
          <li>
            <Link to="/coinsinfo">CryptoNews</Link>
          </li>
          <li>
            <Link to="/cryptonews">CoinsInfo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
