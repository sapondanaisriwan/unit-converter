import PropTypes from "prop-types";
export default function Button({ type, children, onClick }) {
  return (
    <button
      type={type}
      className="text-sky-500 flex items-center md:hover:scale-125 ease-in-out duration-150"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.string,
};
