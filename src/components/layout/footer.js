import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { SiTiktok, SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-center gap-4 footer">
      <div className="col-2">
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={250}
            height={40}
            className="image-container"
          />
        </Link>
      </div>

      <div className="col-2 d-flex justify-content-center align-items-center gap-2">
        <AiOutlineCopyrightCircle />

        <span>2025. All rights reserved.</span>
      </div>

      <div className="col-2 d-flex justify-content-center gap-4">
        <SiTiktok />

        <SiInstagram />

        <GrYoutube />
      </div>
    </footer>
  );
};
