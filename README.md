# БЭМ

## Запуск
```
npm i
npm start
```

## Комментарии к решению
1. Приложение построено на базе react-create-app --scripts-version=react-scripts-ts

  
  
2. Верстка разделена на независимые компоненты в папке /Components.
Для позиционирования компонентов, используются миксы с классами родителя.
```
export const Nav: React.SFC<INavProps> = ({ className, ... }) => (
    <ul className={ cnNav(null, [className]) }>
        ...
    </ul>
);
```

3. Пакет **@bem-react/classname** используется в каждом компоненте.

4. Пакет **@bem-react/core** замечательно показал себя при выборе компонента для опциональных данных карточки /Components/Card/CardData.
В родителе передаю все возможные параметры в <CardData />, а компонент при помощи композиции и условий определяет 
какой компонент необходимо рендерить. 

5. Пакет **@bem-react/di** используется для разделения компонентов Header и Footer по платформам в учебных целях. 
Пробовал разделить остальные компоненты, это дало отрицательные результаты т.к. стили всех модификаций будут мержится при импорте.
Однако, разделение будет иметь смысл при настройке вебпака на сборке бандлов под определенную платформу.

Платформа определяется при помощи пакета device-detector (рекомендовано в лекции) в index.tsx

6. Есть отличия в верстке по сравнению с базовой версией. Сделано в сторону упрощения, 
т.к. задание в первую очередь на использование заданных технологий 
  - Отсутствует кнопка Expand ("клювик") на карточках при наведении.
  - Отсутствует sidebar с навигацией в мобильной версии
  - Баги отображения иконок на карточках (рекомендуются Blink-браузеры (Chrome, Яндекс))
