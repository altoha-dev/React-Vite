import { ButtonHTMLAttributes, FC } from 'react';

type ButtonType = 'default' | 'border' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
}

export const Button: FC<Props> = function Button(props) {
  const { mode = 'default', ...rest } = props;

  let bgbutton = 'bg-blue-800';
  let textColor = 'text-white';

  if (mode == 'dark') {
    bgbutton = 'bg-gray-900';
    textColor = 'text-gray-100';
  } else if (mode == 'border') {
    bgbutton = 'border bg-white border-gray-100';
    textColor = 'text-black-400';
  }

  return (
    <button {...rest} className={`rounded pb-2 pt-2 w-6/12 ${bgbutton} ${rest.className}`}>
        <p className={`font-normal ${textColor}`}>{rest.children}</p>
    </button>
  );
};