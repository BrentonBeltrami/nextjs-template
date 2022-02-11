import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from "react-redux";

//@ts-ignore
export default function ThemeProvider({ children }) {
	const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  useEffect(() => {
    localStorage.setItem('theme', theme );
  }, [theme]);

  return (
    <div className={`${theme}`}>
      {children}
    </div>
  );
}
