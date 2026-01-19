export const Information = () => {
  const itemsMenu = [
    {
      id: "beforeFlight",
      title: "Перед полетом",
      items: [
        { id: "tariffs", name: "Тарифы" },
        { id: "registration", name: "Онлайн регистрация" },
        { id: "baggageFlight", name: "Багаж" },
        { id: "flightMap", name: "Карта полетов" },
        { id: "schedule", name: "Расписание рейсов" },
        { id: "guide", name: "Визовый справочник" },
        { id: "benefit", name: "Льготные тарифы" },
        { id: "traveling", name: "Путешествия с детьми" },
        { id: "categories", name: "Особые категории пассажиров" },
        { id: "shipping", name: "Перевозка животных" },
        { id: "additional", name: "Дополнительные усулги" },
      ],
    },
    {
      id: "board",
      title: "На борту",
      items: [
        { id: "service", name: "Классы обслуживания" },
        { id: "nutrition", name: "Питание" },
        { id: "space", name: "Услуга Extra Space" },
        { id: "magazine", name: "Журнал S7" },
        { id: "entertainment", name: "Система развлечений на борту" },
      ],
    },
    {
      id: "airport",
      title: "В аэропорту",
      items: [
        { id: "scoreboard", name: "Табло рейсов" },
        { id: "halls", name: "Бизнес залы" },
        { id: "cancellation", name: "Задержка или отмена рейса" },
      ],
    },
    {
      id: "s",
      title: "S7 Airlines",
      items: [
        { id: "history", name: "О компании" },
        { id: "development", name: "Устойчивое развитие" },
        { id: "charity", name: "Благотворительность" },
        { id: "fleet", name: "Наш флот" },
        { id: "rules", name: "Правила перевозок" },
        { id: "news", name: "Новости" },
        { id: "envelopes", name: "Летающие конверты" },
        { id: "documents", name: "Отчетные документы" },
        { id: "help", name: "Справочный центр" },
        { id: "mobile", name: "Мобильное приложение" },
      ],
    },
  ];

  const stopEvent = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ul
      className="h-80 bg-[white] grid grid-cols-4 pt-14 pr-14 pb-14 pl-43 overflow-auto rounded-b-[15px] max-[1440px]:grid-cols-2 max-[822px]:hidden"
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
