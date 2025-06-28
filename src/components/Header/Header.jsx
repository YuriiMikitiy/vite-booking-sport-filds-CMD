
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Відстеження зміни розміру вікна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        .underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color:rgb(105, 189, 123); /* blue-600 */
          transform: scaleX(0);
          transform-origin: bottom left;
          transition: transform 0.3s ease-in-out;
        }
        .underline-animation:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      <div className="flex items-center justify-between w-full bg-white shadow-md relative box-border px-4 py-3">
        {/* Ліва частина: логотип + посилання */}
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              className="w-12 h-12 md:w-15 md:h-15"
              src="/src/assets/BookingSportFildIconApp.png"
              alt="Logo"
            />
          </a>
          <ul className="flex gap-4 text-base md:text-xl">
            <li>
              <a href="/" className="relative underline-animation">
                {isMobile ? "Спорт — це ти" : "Головна сторінка"}
              </a>
            </li>
          </ul>
        </div>

        {/* Навігація */}
        <nav className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-between w-8 h-8"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
              <img
                className="w-5 h-4"
                src="/src/assets/burgermenu_menu_navigation_icon.png"
                alt="Menu"
              />
            </div>
          </button>

          {/* Мобільне меню */}
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col absolute right-4 top-14 bg-white shadow-md list-none p-4 rounded-xl md:hidden z-10 w-48`}
          >
            <li className="py-2">
              <a href="#" className="text-base hover:text-blue-600">
                Головна
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-base hover:text-blue-600">
                Про нас
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-base hover:text-blue-600">
                Послуги
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-base hover:text-blue-600">
                Контакти
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-base hover:text-blue-600">
                Вихід
              </a>
            </li>
          </ul>

          {/* Десктопне меню */}
          <ul className="hidden md:flex gap-4 text-lg">
            <li>
              <a href="#" className="relative underline-animation hover:text-blue-600">
                Головна
              </a>
            </li>
            <li>
              <a href="#" className="relative underline-animation hover:text-blue-600">
                Про нас
              </a>
            </li>
            <li>
              <a href="#" className="relative underline-animation hover:text-blue-600">
                Послуги
              </a>
            </li>
            <li>
              <a href="#" className="relative underline-animation hover:text-blue-600">
                Контакти
              </a>
            </li>
            <li>
              <a href="#" className="relative underline-animation hover:text-blue-600">
                Вихід
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
