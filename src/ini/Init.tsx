import { createRouter, RouterProvider } from '@tanstack/react-router';
import { FC, useEffect } from 'react';
import { routeTree } from '../routeTree.gen';
import { useUnit } from 'effector-react';
import { setNotesDefaultValue } from '../pages/notes/store/NoteStore';


 export const router =createRouter ({
    routeTree
 })
export const Init: FC = function init(){
    const setNotesDefaultValueFn = useUnit(setNotesDefaultValue)

   useEffect(()=>{
      setNotesDefaultValueFn() 
   },[])
    
    
 return <RouterProvider router ={router}/>
};