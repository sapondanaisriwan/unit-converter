import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <header className="mb-6">
      <div className="flex justify-center items-center relative">
        <a
          href="https://github.com/sapondanaisriwan/unit-converter"
          target="_blank"
          rel="noreferrer"
          className="text-slate-900 dark:text-white text-3xl font-bold mb-1 flex items-center gap-1"
        >
          <i className="bx bxl-github"></i>
          Unit Converter
        </a>
        <SwitchTheme />
      </div>
      <h4 className="text-slate-500 dark:text-slate-400 text-base font-normal text-center">
        Calculation based on a root font-size of 16 pixel
      </h4>
    </header>
  );
}
