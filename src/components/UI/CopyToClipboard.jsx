import { useState } from "react";
import PropTypes from "prop-types";
export default function CopyToClipboard({ id, suffix }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = async () => {
    const ele = document.getElementById(id);
    const toCopy = `font-size: ${ele.value}${suffix};`;

    if (ele && navigator.clipboard) {
      ele.select();
      await navigator.clipboard.writeText(toCopy);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  return (
    <span
      className="border-t border-b border-l dark:border-slate-600 text-sm p-2 rounded-l bg-gray-100 text-gray-700 dark:text-white dark:bg-slate-700 cursor-pointer"
      onClick={copyHandler}
    >
      <i className={`bx bx-${isCopied ? "check-circle" : "copy-alt"}`}></i>
    </span>
  );
}
CopyToClipboard.propTypes = {
  id: PropTypes.string,
  suffix: PropTypes.string,
};
