import { FC, HTMLAttributes } from 'react';
import { COLOR_BACKGROUND } from './color';


export const Card: FC<HTMLAttributes<HTMLDivElement>> = function card(props){

 return <div
 className={`${COLOR_BACKGROUND.main400} max-w-80 mx-auto p-4 mt-4 rounded-lg ${props.className}`}>
  {props.children}
 </div>
};