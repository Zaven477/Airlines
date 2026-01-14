export const Business = () => {
  const itemsMenu = [
    {
      id: "corp",
      title: "Командировки S7 Corp",
      items: [
        { id: "program", name: "О программе" },
        { id: "participant", name: "Стать участником" },
        { id: "businessOffice", name: "Войти в Бизнес-кабинет" },
        { id: "blog", name: "Блог" },
        { id: "charity", name: "Благотворительность" },
        { id: "feedback", name: "Обратная связь" },
        { id: "rogramRules", name: "Правила программы" },
        { id: "conditions", name: "Основные условия Электронной покупки" },
        { id: "answers", name: "Вопросы и ответы" },
      ],
    },
    {
      id: "transportation",
      title: "Групповые перевозки",
      items: [{ id: "bid", name: "Оформить заявку" }],
    },
    {
      id: "logistics",
      title: "Логистика",
      items: [
        { id: "cargo", name: "Груз" },
        { id: "envelopes", name: "Летающие конверты" },
      ],
    },
    {
      id: "eventsFlight",
      title: "Мероприятия",
      items: [{ id: "historyProgram", name: "О программе" }],
    },
    {
      id: "webinar",
      title: "Вебинары",
      items: [{ id: "talk", name: "S7 Corp Talk" }],
    },
  ];

  const stopEvent = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ul
      className="h-80 bg-[white] grid grid-cols-5 pt-14 pr-14 pb-14 pl-43 overflow-auto"
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
