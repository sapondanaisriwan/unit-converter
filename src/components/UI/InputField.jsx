import PropTypes from "prop-types";
import CopyToClipboard from "./CopyToClipboard";
import InputLabel from "./InputLabel";
import InputSuffix from "./InputSuffix";
import InputContainer from "./InputContainer";

export default function InputField({ info, defaultData, onCalcUnit }) {
  return (
    <div className="basis-full">
      <InputLabel label={info.label} link={info.link} />
      <div className="flex">
        <CopyToClipboard id={info.link} suffix={info.suffix} />
        <InputContainer
          info={info}
          defaultData={defaultData}
          onCalcUnit={(type, value) => onCalcUnit(type, value)}
        />
        <InputSuffix suffix={info.suffix} />
      </div>
    </div>
  );
}

InputField.propTypes = {
  defaultData: PropTypes.object,
  info: PropTypes.object,
  label: PropTypes.string,
  onCalcUnit: PropTypes.func,
  suffix: PropTypes.string,
};
