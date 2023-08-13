import PropTypes from "prop-types";
export default function InputLabel({ label, link }) {
  return (
    <label
      htmlFor={link}
      className="block text-gray-700 dark:text-white text-sm font-semibold mb-2 uppercase"
    >
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};