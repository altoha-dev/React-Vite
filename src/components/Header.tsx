import { FC } from 'react';
import { Button } from '../shared/ui/Button';

export const Header: FC = function Header() {
  const hanlePress = () => {
    console.log('click');
  };
  return (
    <header className="bg-blue-500 h-40">
      <Button onClick={hanlePress}>{'default'}</Button>
      <Button onClick={hanlePress} mode="dark">
        {'dark'}
      </Button>
      <Button onClick={hanlePress} mode="border">
        {'border'}
      </Button>

      <h5 className="text-black ">
        Zagollovok
        <p className="bg-slate-500">opisanie</p>
      </h5>
      <button onClick={hanlePress} className="text-white bg-black">
        {' '}
        {'aboba'}
      </button>
    </header>
  );
};
