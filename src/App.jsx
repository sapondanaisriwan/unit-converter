import { useState } from "react";
import Preview from "./components/Calculation/Preview/Preview";
import UserInput from "./components/Calculation/Userinput/UserInput";
import Header from "./components/Header/Header";

function App() {
  const defaultValues = {
    root: 16,
    pixel: 32,
    rem: 2,
    em: 2,
    percentage: 200,
  };

  const [unitData, setUnitData] = useState(defaultValues);

  const calcUnit = (type, value) => {
    setUnitData((prevState) => {
      const conversions = {
        pixel: {
          rem: value / prevState.root,
          em: value / prevState.root,
          percentage: (value / prevState.root) * 100,
        },
        rem: {
          pixel: value * prevState.root,
          em: value,
          percentage: value * 100,
        },
        em: {
          pixel: value * prevState.root,
          rem: value,
          percentage: value * 100,
        },
        percentage: {
          pixel: (value / 100) * prevState.root,
          rem: value / 100,
          em: value / 100,
        },
      };
      return { ...prevState, [type]: value, ...conversions[type] };
    });
  };

  return (
    <main className="bg-white dark:bg-slate-800 w-full max-w-5xl shadow-lg rounded-xl px-8 pt-6 pb-8 m-4 md:m-12 overflow-hidden transition-colors">
      <Header />
      <UserInput unitData={unitData} onCalcUnit={calcUnit} />
      <Preview previewData={unitData} />
    </main>
  );
}

export default App;
