import { useState, useEffect } from 'react';

//@ts-ignore
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('');

  function changeTheme(theme: string) {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) setTheme(localStorageTheme);
    setTheme(theme)
    localStorage.setItem('theme', theme);
  }

  useEffect(() => {
    changeTheme(localStorage.getItem('theme') || '')
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`${theme}`}>
      {children}
      <div className="flex justify-center">
        <div className="bg-gray-200 m-4 p-4 rounded">
          <button
            className=""
            onClick={() => {
              changeTheme('')
            }}>
            Theme Root
          </button>
        </div>
        <div className="pink bg-gray-200 m-4 p-4 rounded">
          <button
            className="text-primary-default"
            onClick={() => {
              changeTheme('pink')
            }}>
            Pink
          </button>
        </div>
        <div className="dark bg-gray-200 m-4 p-4 rounded">
          <button
            className="text-primary-default"
            onClick={() => {
              changeTheme('dark')
            }}>
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
