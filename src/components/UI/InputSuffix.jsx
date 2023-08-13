import PropTypes from "prop-types"
export default function InputSuffix({suffix}) {
  return (
    <span className="border-t border-b border-r text-sm p-2 rounded-r bg-gray-100 dark:bg-slate-700 dark:text-white dark:border-slate-600">
      {suffix}
    </span>
  );
}

InputSuffix.propTypes = {
  suffix: PropTypes.string
}
