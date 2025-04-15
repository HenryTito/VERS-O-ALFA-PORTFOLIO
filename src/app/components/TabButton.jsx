import { motion } from "framer-motion";
import "./TabButton.css";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? "tab-button-active" : "tab-button-inactive";

  return (
    <button onClick={selectTab} className="tab-button">
      <p className={`tab-label ${buttonClass} custom-title`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-underline"
      ></motion.div>
    </button>
  );
};

export default TabButton;
