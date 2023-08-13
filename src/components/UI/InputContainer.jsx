import PropTypes from "prop-types";
export default function InputContainer({ info, defaultData, onCalcUnit }) {
  const inputHandler = (event) => {
    onCalcUnit(info.link, +event.target.value);
  };

  return (
    <input
      id={info.link}
      type={info.type}
      min={info.min}
      step={info.step}
      value={defaultData[info.link]}
      className="appearance-none border dark:border-slate-600 rounded-none w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-slate-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={inputHandler}
    ></input>
  );
}

InputContainer.propTypes = {
  defaultData: PropTypes.object,
  info: PropTypes.shape({
    link: PropTypes.string,
    min: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.string,
  }),
  onCalcUnit: PropTypes.func,
};
