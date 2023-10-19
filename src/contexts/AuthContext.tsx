/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IHomeContext {
  currentText: string;
  setCurrentText: Dispatch<SetStateAction<string>>;
}
export const HomeContext = createContext<IHomeContext>({
  currentText: '',
  setCurrentText: () => '',
});

export const HomeProvider = (children: any) => {
  const [currentText, setCurrentText] = useState<any>('');
  const value = { currentText, setCurrentText };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
