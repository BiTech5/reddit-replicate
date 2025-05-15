import React from "react";
import type { QRProps } from "../../models/iqrprops";
import Modal from "../modal/modal";
import "../../styles/components/qr.scss";
import QRPic from "../../assets/qr/download-app-persistent-qr-codex2.png";
import GooglePlay from "../../assets/qr/png-transparent-playstore-playstore-logo-google-play-store-store-market-logo-3d-icon-removebg-preview.png";
import AppStore from "../../assets/qr/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000-removebg-preview.png";

const QR: React.FC<QRProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="qr">
        <h1>Get the Reddit app</h1>
        <p>Scan this QR code to download the app now</p>
        <div className="img-container">
          <img src={QRPic} alt="reddit-qr" />
          <p>Or check it out in the app stores</p>
        </div>
        <div className="app-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"
            target="_blank"
            rel="noopener noreferrer"
            className="store-button google-play"
          >
            <div className="store-logo">
              <img src={GooglePlay} style={{ width: "55px" }} alt="Google Play logo" />
            </div>
            <div className="store-text">
              <span className="store-hint">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </a>
          <a
            href="https://apps.apple.com/app/reddit/id1064216828"
            target="_blank"
            rel="noopener noreferrer"
            className="store-button app-store"
          >
            <div className="store-logo">
              <img src={AppStore} alt="App Store logo" />
            </div>
            <div className="store-text">
              <span className="store-hint">Download on the</span>
              <span className="store-name">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default QR;