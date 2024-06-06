import React, { useState, useEffect } from "react";
import styles from "@/styles/Checklist.module.css";
import { useRouter } from "next/router";
import {
  ChevronRightIcon,
  RadioButtonIcon,
  RadioButtonCheckedIcon,
  RadioButtonOutlinedIcon,
} from "../assets/icons/IconLibrary";

type OnboardingItemProps = {
  id: string;
  title: string;
  checked?: boolean;
  focused?: boolean;
  onClick: () => any;
};

type OnboardingCheckboxProps = { checked?: boolean; focused?: boolean };

const OnboardingCheckbox = ({
  checked,
  focused = false,
}: OnboardingCheckboxProps) => {
  if (focused)
    return (
      <RadioButtonOutlinedIcon width={24} height={24} className="text-main" />
    );
  if (checked)
    return (
      <RadioButtonCheckedIcon
        width={24}
        height={24}
        className="text-gray-100"
      />
    );

  return <RadioButtonIcon width={24} height={24} className="text-gray-300" />;
};

const OnboardingItem = ({
  id,
  title,
  checked,
  focused,
  onClick,
}: OnboardingItemProps) => {
  return (
    <div
      className={`${styles.nextStepsStep + " " + styles.nextStepsStepPointer}`}
      id={id}
      onClick={onClick}
    >
      <div>
        <OnboardingCheckbox checked={checked} focused={focused} />
        <span>{title}</span>
      </div>
      <div>
        {!checked && (
          <ChevronRightIcon width={12} height={12} className="text-main" />
        )}
      </div>
    </div>
  );
};

export default function Checklist() {
  const router = useRouter();

  const getOnboardingList = () => {
    const onboardingList: {
      id: string;
      checked?: boolean;
      focused?: boolean;
      title: string;
      onClick: () => any;
    }[] = [
      {
        id: "fund",
        checked: false,
        title: "Make a deposit into your account",
        onClick: () => {},
      },
      {
        id: "scheduleMeeting",
        checked: false,
        title: "Schedule a meeting with your wealth manager",
        onClick: () => {},
      },
      {
        id: "accessDigitalBanking",
        checked: false,
        title: "Access online banking",
        onClick: () => {},
      },
      {
        id: "addNewChecking",
        checked: false,
        title: "Add a checking account",
        onClick: () => {},
      },
      {
        id: "requestDebit",
        checked: false,
        title: "Request a debit card",
        onClick: () => {},
      },
      {
        id: "addBeneficiary",
        checked: false,
        title: "Add a beneficiary",
        onClick: () => {},
      },
      {
        id: "openShare",
        checked: false,
        title: "Open a certificate of deposit",
        onClick: () => {},
      },
      {
        id: "connectDirectDeposit",
        checked: false,
        title: "Add/Switch Direct Deposit",
        onClick: () => {},
      },
      {
        id: "openAccount",
        checked: false,
        title: "Add an account",
        onClick: () => {},
      },
    ];

    // Highlight radio button based on sequence
    const firstUnchecked = onboardingList.find((item) => !item.checked);
    if (firstUnchecked) firstUnchecked.focused = true;

    return onboardingList;
  };

  return (
    <div className={`${styles.nextStepsSteps} ${styles.nextStepStepsMinWidth}`}>
      {getOnboardingList().map(({ id, title, checked, focused, onClick }) => {
        return (
          <OnboardingItem
            key={id}
            id={id}
            checked={checked}
            focused={focused}
            title={title}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}
