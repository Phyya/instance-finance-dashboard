import React from "react";

type Options = Record<string, any>;

type Props = {
  options: Options;
  style?: React.CSSProperties;
  close: () => void;
  open: boolean;
  onOptionsChange: (options: Options) => void;
};

const OptionsModal: React.FC<Props> = ({ options, open, close, style }) => {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 overflow-hidden "
        onClick={close}
        data-testid="overlay"
      />
      <div
        className="absolute z-20 right-0 bg-white shadow-md rounded-md py-2 px-7 shadow-slate-500"
        style={style}
      >
        {options.map((option: any, index: number) => {
          return <React.Fragment key={index}>{option}</React.Fragment>;
        })}
      </div>
    </>
  );
};
export default OptionsModal;
