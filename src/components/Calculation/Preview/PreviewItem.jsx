import PropTypes from "prop-types";
export default function PreviewItem({ label, value, suffix }) {
  return (
    <li className="basis-1/4 break-words min-w-0">
      <p className="dark:text-slate-400 text-center uppercase">{label}</p>
      <p
        className="text-center min-w-0"
        style={{ fontSize: `${value}${suffix}` }}
      >
        Text
      </p>
    </li>
  );
}

PreviewItem.propTypes = {
  label: PropTypes.string,
  suffix: PropTypes.string,
  value: PropTypes.number,
};
