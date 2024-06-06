import styles from "@/styles/Header.module.css";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/images/usc-header-logo.png";

const DropdownComponent = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((currStatus) => !currStatus);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownSelect} onClick={toggleMenu}>
        <p className={styles.dropdownContainerText}>USCCU</p>
      </div>
      {isMenuActive && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem} onClick={() => {}}>
            <div className={styles.dropdownText}>USCCU</div>
          </div>
          <div className={styles.dropdownItem} onClick={() => {}}>
            <div className={styles.dropdownText}>SCU</div>
          </div>
          <div className={styles.dropdownItem} onClick={() => {}}>
            <div className={styles.dropdownText}>FFFCU</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftAlignedItems}>
          <Image
            src={Logo}
            width={175}
            height={50}
            alt="Logo"
            priority={true}
          />
        </div>
        <div className={styles.rightAlignedItems}>
          <DropdownComponent />
        </div>
      </div>
    </>
  );
}
