import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ftrbg from "../assets/ftr_bg.mp4";

const Footer = () => {
  return (
    <div>
      <div className="w-full relative footer h-fit px-2 md:px-5 lg:px-10 py-5 bg-[#b600ad3f]">
        <div className="absolute top-0 left-0 w-full h-full object-cover ftr_bg_vdo">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={ftrbg}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Pages</div>
            <div className="f_ttl_p">Home</div>
            <div className="f_ttl_p">
              <Link to="/poker">Poker</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/Casino">Casino</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/Livecasino">Live Casino</Link>
            </div>
            <div className="f_ttl_p">Sports</div>
            <div className="f_ttl_p">Help</div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Site Policies</div>
            <div className="f_ttl_p">Anti-Money Laundering</div>
            <div className="f_ttl_p">
              <Link to="/termcondition">Terms and Conditions</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/privecypolicy">Privacy Policy</Link>
            </div>
            <div className="f_ttl_p">Bet Validation and Acceptance</div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Additional Information</div>
            <div className="f_ttl_p">Sports Rules</div>
            <div className="f_ttl_p">Game Rules</div>
            <div className="f_ttl_p">Betting Glossary</div>
            <div className="f_ttl_p">Responsible Gaming</div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Playbet</div>

            <div className="f_ttl_p">About Us</div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="w-full flex flex-col items-center">
            <div className="f_ttl2">Playbet</div>
            <div className="f_ttl2_p text-center">
              We are an official site for sports betting, slots, poker, and
              online casino. Our platform follows strict security standards to
              protect your data and provide a safe browsing experience. Enjoy
              the best online gaming experience wherever and whenever you want.
              Welcome to Play.bet.ar.
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="f_ttl2">Compatible Wallet</div>
            <div className="f_ttl2_p text-center">
              We are an official site You can only play if you are an adult.
              Gambling may cause pathological addiction. 18+
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-between gap-2">
          <div className="social_icn flex gap-5">
            <p className="f_ttl2_i">
              <FaWhatsapp />
            </p>
            <p className="f_ttl2_i">
              <FaFacebook />
            </p>
            <p className="f_ttl2_i">
              <FaInstagram />
            </p>
          </div>
          <div className="copyrights f_ttl2_p text-center">
            © 2025 Aplus advertising LTD. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
