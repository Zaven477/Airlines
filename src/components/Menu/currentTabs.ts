export const tabs = [
  {
    id: 1,
    label: "Покупка и управление",
    children: [
      {
        id: "search",
        title: "Поиск",
        children: [
          { id: "tickets", name: "Авиабилеты" },
          { id: "flights", name: "Расписание рейсов" },
          { id: "hotels", name: "Отели" },
          { id: "S7", name: "S7 Shop" },
        ],
      },
      {
        id: "control",
        title: "Управление",
        children: [
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
        children: [
          { id: "stock", name: "Акции" },
          { id: "flight", name: "Групповой перелет" },
          { id: "certificates", name: "Подарочные сертификаты" },
          { id: "doctors", name: "Врачи на борту" },
          { id: "Events", name: "S7 Events" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "S7 Priority",
    children: [
      {
        id: "program",
        title: "Программа",
        children: [
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
        children: [
          { id: "save", name: "Копить мили" },
          { id: "spend", name: "Тратить мили" },
          { id: "recovery", name: "Восстановление миль" },
          { id: "translation", name: "Перевод миль" },
          { id: "purchase", name: "Покупка миль" },
          { id: "charity", name: "Благотворительность" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Информация",
    children: [
      {
        id: "beforeFlight",
        title: "Перед полетом",
        children: [
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
        children: [
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
        children: [
          { id: "scoreboard", name: "Табло рейсов" },
          { id: "halls", name: "Бизнес залы" },
          { id: "cancellation", name: "Задержка или отмена рейса" },
        ],
      },
      {
        id: "s",
        title: "S7 Airlines",
        children: [
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
    ],
  },
  {
    id: 4,
    label: "Бизнесу",
    children: [
      {
        id: "corp",
        title: "Командировки S7 Corp",
        children: [
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
        children: [{ id: "bid", name: "Оформить заявку" }],
      },
      {
        id: "logistics",
        title: "Логистика",
        children: [
          { id: "cargo", name: "Груз" },
          { id: "envelopes", name: "Летающие конверты" },
        ],
      },
      {
        id: "eventsFlight",
        title: "Мероприятия",
        children: [{ id: "historyProgram", name: "О программе" }],
      },
      {
        id: "webinar",
        title: "Вебинары",
        children: [{ id: "talk", name: "S7 Corp Talk" }],
      },
    ],
  },
];
