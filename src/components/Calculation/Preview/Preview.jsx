import PropTypes from "prop-types";
import PreviewItem from "./PreviewItem";

const previewItems = [
  {
    id: 1,
    label: "pixel",
    suffix: "px",
  },
  {
    id: 2,
    label: "rem",
    suffix: "rem",
  },
  {
    id: 3,
    label: "percentage",
    suffix: "%",
  },
  {
    id: 4,
    label: "em",
    suffix: "em",
  },
];

export default function Preview({ previewData }) {
  return (
    <div className="dark:text-white">
      <h2 className="text-lg font-semibold mb-3">Preview</h2>
      <ul className="flex flex-col md:flex-row md:space-x-2">
        {previewItems.map((item) => (
          <PreviewItem
            key={item.id}
            label={item.label}
            value={previewData[item.label]}
            suffix={item.suffix}
          />
        ))}
      </ul>
    </div>
  );
}

Preview.propTypes = {
  previewData: PropTypes.shape({
    em: PropTypes.number,
    percent: PropTypes.number,
    px: PropTypes.number,
    rem: PropTypes.number,
  }),
};
