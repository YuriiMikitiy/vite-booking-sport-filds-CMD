import React, {useState, useEffect} from "react";

export default function ChooseFildAdmin() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
        // Відстеження зміни розміру вікна
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        // Додаємо слухач події resize
        window.addEventListener("resize", handleResize);
    
        // Очищаємо слухач при розмонтуванні компонента
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <div className="bg-[#f5f5f5] border-b-2 border-t-2 border-[#eff2f7] w-full h-20 flex items-center rounded-lg shadow px-4">
      {/* Стрілочка ліворуч */}
      <div className="text-gray-400 mr-4 flex-shrink-0">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      {/* Ліва частина */}
      <div className="flex flex-col w-1/2 border-l border-[rgba(34,34,34,0.2)] pl-6">
        <span className="text-sm text-gray-500">Таблиця:</span>
        <span className="font-semibold text-[14px] text-gray-900">ІФНТУНГ Ректорат</span>
        <span className="text-sm text-gray-600 md: text-[12px]">{isMobile? "01.08.2025" : "станом на 01.08.2025"}</span>
      </div>

      {/* Права частина */}
      <div className="flex flex-col items-start flex-grow border-l border-r border-[rgba(34,34,34,0.2)] pl-6">
        <span className="text-sm text-gray-500">Редагування:</span>
        <span className="font-semibold text-[14px] text-gray-900">0 Нова версія ассортимента</span>
        <div className="flex mt-1 space-x-1">
          {[...Array(isMobile? 6:8)].map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-gray-300"></span>
          ))}
        </div>
      </div>

      {/* Стрілочка праворуч */}
      <div className="text-gray-400 flex-shrink-0 ml-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
