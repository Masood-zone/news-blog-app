import React from "react";
import { NAVBAR_DATA } from "../navbar/data";
import { Link } from "react-router-dom";
import { Instagram, Phone, SendHorizontal } from "lucide-react";
import { tikTok } from "../../assets";

function Footer() {
  return (
    <footer className="mt-10 bottom-0 left-0 z-40">
      <footer className="footer p-10 max-sm:p-4 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Topics</h6>
          {NAVBAR_DATA.map((link) => (
            <Link key={link.id} to={link.path} className="link link-hover">
              {link.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Our Group</h6>
          <a
            className="link link-hover flex items-center gap-3"
            href="mailto:ederi5371@gmail.com"
          >
            <SendHorizontal /> Ebenezer
          </a>
          <a
            className="link link-hover flex items-center gap-3"
            href="tel:+23324 0856597"
          >
            <Phone /> +233 24 085 6597
          </a>
        </nav>
      </footer>
      <footer className="footer px-10 max-sm:p-4 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center flex  flex-col min-xl:w-full">
          <p>
            <p className="text-4xl font-bold">Nkonkonsa Fie</p>
            Yendi konkonsa kakra...
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.tiktok.com/@_ebento?_t=8li459tu6H0&_r=1"
              className=""
              target="_blank"
            >
              <img
                src={tikTok}
                alt="social-icon"
                className=" cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
              />
            </a>
            <a
              href="https://www.instagram.com/wale_ebenezer?igsh=MWNzMng5aDMzeDA3NA=="
              target="_blank"
            >
              <Instagram className=" cursor-pointer hover:scale-110 transition-all duration-300 ease-out" />
            </a>
            <a
              href="https://www.facebook.com/Ebento211?mibextid=kFxxJD"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
}

export default Footer;
