"use client";

import Button from "@/components/Button";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  items?: NavItem[];
  showButton?: boolean;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  linkClassName?: string;
  variant?: "header" | "footer" | "custom";
  onButtonClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Updates", href: "#updates" },
  { label: "Help", href: "#help" },
];

const Nav = ({
  items = defaultNavItems,
  showButton = true,
  buttonText = "Get for free",
  buttonVariant = "primary",
  className,
  linkClassName,
  variant = "header",
  onButtonClick,
}: NavProps) => {
  // Default styles based on variant
  const getDefaultClassName = () => {
    switch (variant) {
      case "header":
        return "hidden md:flex gap-6 text-black/60 items-center";
      case "footer":
        return "flex flex-wrap gap-6 text-[#BCBCBC] items-center";
      case "custom":
        return "";
      default:
        return "hidden md:flex gap-6 text-black/60 items-center";
    }
  };

  const getDefaultLinkClassName = () => {
    switch (variant) {
      case "header":
        return "hover:text-black transition-colors duration-200";
      case "footer":
        return "hover:text-white transition-colors duration-200";
      case "custom":
        return "transition-colors duration-200";
      default:
        return "hover:text-black transition-colors duration-200";
    }
  };

  const navClassName = className || getDefaultClassName();
  const linkClasses = linkClassName || getDefaultLinkClassName();

  return (
    <nav className={navClassName}>
      {items.map((item, index) => (
        <Link key={index} href={item.href} className={linkClasses}>
          {item.label}
        </Link>
      ))}
      {showButton && (
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </nav>
  );
};

export default Nav;
