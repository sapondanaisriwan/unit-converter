import PropTypes from "prop-types";
import InputField from "../../UI/InputField";

const inputFields = [
  {
    id: 1,
    link: "pixel",
    type: "number",
    min: 0,
    step: 1,
    label: "pixel",
    suffix: "px",
  },
  {
    id: 2,
    link: "rem",
    type: "number",
    min: 0,
    step: 1,
    label: "rem",
    suffix: "rem",
  },
  {
    id: 3,
    type: "number",
    link: "percentage",
    min: 0,
    step: 100,
    label: "percentage",
    suffix: "%",
  },
  {
    id: 4,
    type: "number",
    link: "em",
    min: 0,
    step: 1,
    label: "em",
    suffix: "em",
  },
];

export default function UserInput({ onCalcUnit, unitData }) {
  const calcUnit = (type, value) => onCalcUnit(type, value);

  return (
    // md:space-x-2
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:flex-row mb-6">
      {inputFields.map((input) => (
        <InputField
          key={input.id}
          info={input}
          defaultData={unitData}
          onCalcUnit={calcUnit}
        />
      ))}
    </div>
  );
}

UserInput.propTypes = {
  onCalcUnit: PropTypes.func,
  unitData: PropTypes.object,
};
