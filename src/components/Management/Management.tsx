export const Management = () => {
  const itemsMenu = [
    {
      id: "search",
      title: "Поиск",
      items: [
        { id: "tickets", name: "Авиабилеты" },
        { id: "flights", name: "Расписание рейсов" },
        { id: "hotels", name: "Отели" },
        { id: "S7", name: "S7 Shop" },
      ],
    },
    {
      id: "control",
      title: "Управление",
      items: [
        { id: "reservation", name: "Мои бронирования" },
        { id: "registration", name: "Регистрация на рейс" },
        { id: "baggage", name: "Дополнительный багаж" },
        { id: "choice", name: "Выбор места на борту" },
        { id: "upgrade", name: "Повышение класса" },
      ],
    },
    {
      id: "flying",
      title: "Полеты с нами",
      items: [
        { id: "stock", name: "Акции" },
        { id: "flight", name: "Групповой перелет" },
        { id: "certificates", name: "Подарочные сертификаты" },
        { id: "doctors", name: "Врачи на борту" },
        { id: "Events", name: "S7 Events" },
      ],
    },
  ];

  const stopEvent = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ul
      className="h-80 bg-[white] grid grid-cols-3 pt-14 pr-14 pb-14 pl-43 overflow-auto"
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
