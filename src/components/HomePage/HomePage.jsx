import React, { useState } from "react";
import ChooseFildAdmin from "../ChooseFildAdmin/ChooseFildAdmin";

function MenuItem({ text, w = "w-auto" }) {
  return (
    <div className={`hidden md:flex pl-5 items-center h-11 ${w}`}>
      {text}
      <span className="ml-2" />
      <svg
        className="w-3 h-3"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.00033 0.666626C6.36852 0.666626 6.66699 0.965103 6.66699 1.33329V9.05715L10.1956 5.52855C10.4559 5.26821 10.878 5.26821 11.1384 5.52855C11.3987 5.7889 11.3987 6.21101 11.1384 6.47136L6.47173 11.138C6.21138 11.3984 5.78927 11.3984 5.52892 11.138L0.862254 6.47136C0.601905 6.21101 0.601905 5.7889 0.862254 5.52855C1.1226 5.26821 1.54471 5.26821 1.80506 5.52855L5.33366 9.05715V1.33329C5.33366 0.965103 5.63214 0.666626 6.00033 0.666626Z"
          fill="#222222"
        />
      </svg>
    </div>
  );
}

function ItemSport({ text, w = "w-auto" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Помилка копіювання:", err));
  };

  return (
    <>
      {copied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded shadow-lg text-sm z-50 pointer-events-none animate-fade">
          Скопійовано!
        </div>
      )}

      <div
        onClick={handleCopy}
        title="Натисніть для копіювання"
        className={`hidden md:flex pl-5 items-center min-h-10 ${w} text-sm cursor-pointer hover:bg-gray-100 transition duration-200 break-all`}
      >
        <span>{text}</span>
      </div>
    </>
  );
}

export default function HomePage() {
  const menuItems = [
    { text: "№", w: "w-20" },
    { text: "Час", w: "w-28" },
    { text: "Email клієнта", w: "w-60 " },
    { text: "Номер телефону", w: "w-42" },
    { text: "Тип", w: "w-28" },
    { text: "Загальна вартість", w: "w-42" },
    { text: "Коментар до бронювання", w: "w-62" },
    { text: "Скасовано?", w: "w-32" },
  ];

  const itemsSportData = [
    ["1", "12:00-14:00", "yura.mikitiytest1@gmail.com", "+380969013323", "Волейбол", "425.00 грн", "Було б прикольно отримати спортивний інвентар", "Ні"],
    ["2", "14:00-16:00", "anna.koval@gmail.com", "+380672223344", "Футбол", "650.00 грн", "Гратимемо з друзями, м’яч маємо", "Ні"],
    ["3", "10:00-12:00", "oleksii.p@ukr.net", "+380503456789", "Теніс", "300.00 грн", "Потрібні ракетки напрокат", "Так"],
    ["4", "16:00-18:00", "sergiy1985@gmail.com", "+380935432198", "Баскетбол", "500.00 грн", "Потрібні м’ячі й табло", "Ні"],
    ["5", "18:00-20:00", "vika.sport@meta.ua", "+380991112233", "Бадмінтон", "220.00 грн", "Можна сітку нижче поставити?", "Ні"],
  ];

  return (
    <>
      <ChooseFildAdmin />

      <div className="w-full h-11 flex mt-6 mb-3">
        <section className="font-bold text-[24px] text-gray-900 ml-2">
          Список бронювань
        </section>
        <button
          className="cursor-pointer flex text-[15px] ml-auto mr-2 border-1 border-[#9ca2b8] rounded-[12px] w-36 h-11"
          onClick={() => {
            alert("Hello! Ця функція буде доступна ближчим часом.");
          }}
        >
          <img
            className="h-6 w-6 ml-[26px] mr-2 my-[10px]"
            src="/src/assets/export_arrow_up_icon.svg"
            alt="export"
          />
          <section className="my-[10px] ml-2">Експорт</section>
        </button>
      </div>
{/* //border-2 border-[#eff2f7] */}
      <div className="hidden md:block overflow-x-auto mx-3 mb-10">
        <div className="min-w-max">
          <div className="flex border-b-2 border-[#ffd4a8]">
            {menuItems.map((item, index) => (
              <MenuItem key={index} text={item.text} w={item.w} />
            ))}
          </div>

          {itemsSportData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex border-b-2 border-[#eff2f7]">
              {row.map((text, i) => (
                <ItemSport key={i} text={text} w={menuItems[i]?.w || "w-auto"} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center mt-8 text-[26px] mx-3">
        <div className="flex justify-center items-center text-center bg-[#ff3333BF] box-border rounded-[12px] text-[26px] px-4 py-2 gap-2">
          <span>Для коректного відображення списку поверніть екран</span>
          <img className="h-12 w-12 rotate-90" src="/src/assets/Turn_screen_icons.svg" alt="Turn_screen" />
        </div>

        <img
          className="w-auto max-w-[80%] h-auto max-h-[calc(100vh-500px)]"
          src="/src/assets/2sport-children.png"
          alt="Спорт діти"
        />
      </div>
    </>
  );
}
