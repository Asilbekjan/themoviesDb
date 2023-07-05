import React from "react";
import "../navbar_page/navbar.css";
import { nav_link } from "./navbar_first";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log(nav_link);
  return (
    <div className="backround_wall">
      <div className="container">
        <div className="row justify-content-between align-items-center py-1">
          <div className="col-7 mt-3 d-flex">
            <div className="col-3">
              <a href="/">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
              </a>
            </div>
            <div className="col-5">
              <ul className="importantt_nav d-flex list-unstyled ">
                {nav_link &&
                  nav_link.map((item, index) => {
                    return (
                      <li key={index} className="important_nav_item">
                        <a
                          className="text-decoration-none important_nav_item"
                          href="#"
                        >
                          {item.title}
                        </a>

                        {
                          <ul className="list-unstyled menu">
                            {item.nimadur.map((item, index) => {
                              return (
                                <li className="drop-down " key={index}>
                                  <Link
                                    className="text-black text-decoration-none"
                                    to={item.path}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        }
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div className="col-4">
            <ul className="navbar_item">
              <li className="navbar_items_child">
                <a href="/" className="text-light ">
                  <i class="bi bi-plus fw-bolder "></i>
                </a>
              </li>
              <li className="EN-squre navbar_items_child">
                <a className="EN-squre-in text-light" href="/">
                  EN
                </a>
              </li>
              <li className="navbar_items_child">
                <a href="/" className="text-light">
                  <i class="bi bi-bell-fill "></i>{" "}
                </a>
              </li>
              <li className="navbar_items_child">
                <a href="/" className="text-light">
                  {" "}
                  <i class="bi bi-person"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
