import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="container py-2 navigation">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={250}
            height={40}
            className="image-container"
          />
        </Link>

        <div>
          <ul className="nav">
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
  );
};
