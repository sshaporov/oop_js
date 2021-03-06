Модуль – это просто файл. Один скрипт – это один модуль.

Модули могут загружать друг друга и использовать директивы export и import, 
чтобы обмениваться функциональностью, вызывать функции одного модуля из другого.

Так как модули поддерживают ряд специальных ключевых слов, и у них есть ряд особенностей, 
то необходимо явно сказать браузеру, что скрипт является модулем, при помощи атрибута <script type="module">

Особенности модулей:
- В модулях всегда используется режим use strict
- Каждый модуль имеет свою собственную область видимости
  (Если нам нужно сделать глобальную переменную уровня всей страницы, можно явно присвоить её объекту window, 
  тогда получить значение переменной можно обратившись к window.user)
- Код в модуле выполняется только один раз при импорте
- Объект import.meta содержит информацию о текущем модуле
  alert(import.meta.url); // ссылка на html страницу для встроенного скрипта
- В модуле «this» не определён (undefined)
    <script>alert(this)</script> // window
    <script type="module">alert(this)</script> // undefined
- Модули всегда выполняются в отложенном (deferred) режиме, точно так же, как скрипты с атрибутом defer
  Обычные скрипты запускаются сразу же.
- Атрибут async работает во встроенных скриптах
  Для не-модульных скриптов атрибут async работает только на внешних скриптах. Скрипты с ним запускаются сразу по готовности, они не ждут другие скрипты или HTML-документ.
  Для модулей атрибут async работает на любых скриптах.
  Например, в скрипте ниже есть async, поэтому он выполнится сразу после загрузки, не ожидая других скриптов.
- Внешние скрипты с атрибутом type="module" имеют два отличия:
    1. Внешние скрипты с одинаковым атрибутом src запускаются только один раз:
       <!-- скрипт my.js загрузится и будет выполнен только один раз -->
       <script type="module" src="my.js"></script>
       <script type="module" src="my.js"></script>
    2. Внешний скрипт, который загружается с другого домена, требует указания заголовков CORS. 
       Другими словами, если модульный скрипт загружается с другого домена, то удалённый сервер должен установить 
       заголовок Access-Control-Allow-Origin означающий, что загрузка скрипта разрешена.
- Не допускаются «голые» модули
  В браузере import должен содержать относительный или абсолютный путь к модулю. 
  Модули без пути называются «голыми» (bare). Они не разрешены в import
- Совместимость, «nomodule»
  Старые браузеры не понимают атрибут type="module". Скрипты с неизвестным атрибутом type просто игнорируются. 
  Мы можем сделать для них «резервный» скрипт при помощи атрибута nomodule

В реальной жизни модули в браузерах редко используются в «сыром» виде. Обычно, мы объединяем модули вместе, 
используя специальный инструмент, например Webpack и после выкладываем код на рабочий сервер.
Одно из преимуществ использования сборщика – он предоставляет больший контроль над тем, как модули ищутся, 
позволяет использовать «голые» модули и многое другое «своё», например CSS/HTML-модули.

Сборщик делает следующее:
- Берёт «основной» модуль, который мы собираемся поместить в <script type="module"> в HTML.
- Анализирует зависимости (импорты, импорты импортов и так далее)
- Собирает один файл со всеми модулями (или несколько файлов, это можно настроить), перезаписывает встроенный import функцией импорта от сборщика, чтобы всё работало. «Специальные» типы модулей, такие как HTML/CSS тоже поддерживаются.
- В процессе могут происходить и другие трансформации и оптимизации кода:
    Недостижимый код удаляется.
    Неиспользуемые экспорты удаляются («tree-shaking»).
    Специфические операторы для разработки, такие как console и debugger, удаляются.
    Современный синтаксис JavaScript также может быть трансформирован в предыдущий стандарт, с похожей функциональностью, например, с помощью Babel.
    Полученный файл можно минимизировать (удалить пробелы, заменить названия переменных на более короткие и т.д.).


*** ИТОГО: ***

Подводя итог, основные понятия:
1. Модуль – это файл. Чтобы работал import/export, нужно для браузеров указывать атрибут <script type="module">. У модулей есть ряд особенностей:
    - Отложенное (deferred) выполнение по умолчанию.
    - Атрибут async работает во встроенных скриптах.
    - Для загрузки внешних модулей с другого источника, он должен ставить заголовки CORS.
    - Дублирующиеся внешние скрипты игнорируются.
2. У модулей есть своя область видимости, обмениваться функциональностью можно через import/export.
3. В модулях всегда включена директива use strict.
4. Код в модулях выполняется только один раз. Экспортируемая функциональность создаётся один раз и передаётся всем импортёрам.

Когда мы используем модули, каждый модуль реализует свою функциональность и экспортирует её. 
Затем мы используем import, чтобы напрямую импортировать её туда, куда необходимо. 
Браузер загружает и анализирует скрипты автоматически.
В реальной жизни часто используется сборщик Webpack, чтобы объединить модули: для производительности и других «плюшек».