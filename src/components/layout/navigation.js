import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg col-12">
      <div className="container py-2">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={250}
              height={40}
              className="navbar-brand"
            />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/projects">Projects</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={250}
            height={40}
            className="image-container"
            id="offcanvasExampleLabel"
          />
        </Link>

        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/projects">Projects</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>

    </>
  );
};
