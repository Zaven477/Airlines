export const Priority = () => {
  const itemsMenu = [
    {
      id: "program",
      title: "Программа",
      items: [
        { id: "aboutProgram", name: "О программе" },
        { id: "rules", name: "Правила программы" },
        { id: "statuses", name: "Статусы и привилегии" },
        { id: "stock", name: "Акции S7 Priority" },
        { id: "partners", name: "Предложения партнеров" },
        { id: "airlines", name: "Авиакомпании-партнеры" },
        { id: "support", name: "Клиентская поддержка" },
        { id: "mapS7", name: "Карта S7 TBank" },
        { id: "pros", name: "Свои плюсы в S7 Airlines" },
        { id: "account", name: "Личный кабинет" },
      ],
    },
    {
      id: "miles",
      title: "Мои мили",
      items: [
        { id: "save", name: "Копить мили" },
        { id: "spend", name: "Тратить мили" },
        { id: "recovery", name: "Восстановление миль" },
        { id: "translation", name: "Перевод миль" },
        { id: "purchase", name: "Покупка миль" },
        { id: "charity", name: "Благотворительность" },
      ],
    },
  ];

  const stopEvent = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ul
      className="h-80 bg-[white] grid grid-cols-3 pt-14 pr-14 pb-14 pl-43 overflow-auto rounded-b-[15px] max-[1440px]:grid-cols-2 max-[822px]:hidden"
      onClick={stopEvent}
    >
      {itemsMenu.map((item) => (
        <div key={item.id}>
          <h1 className="font-bold">{item.title}</h1>
          <div className="mt-6">
            {item.items.map((chapter) => (
              <li className="mt-3" key={chapter.id}>
                {chapter.name}
              </li>
            ))}
          </div>
        </div>
      ))}
    </ul>
  );
};
