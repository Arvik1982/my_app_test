#  Тестовое задание на позицию «Frontend-разработчик стажер на React»

## Разработчик:
phone.kulikovarseniy@gmail.com

## Задача:
Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта.
Для задачи можно выбрать любое публичное api, например, отсюда https://github.com/public-apis/public-apis

### Каким должно быть приложение:
Пришедшие данные хранятся в сторе.
На карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана.
На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
Сверху должна быть кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки.
Контент карточки(текст) должен быть урезан,чтобы у карчточек была одинаковая высота.
при клике на любом месте карточке(кроме иконки лайка и кнопки удаления) мы должны попадать на отдельную страницу карточки. Уже в ней мы видим полный текст карточки.Так же на этой странице должна быть кнопка вернуться к списку карточек

## Выполнено:
1. Создано SPA со списком всех стран. Данные получаются с адреса: https://restcountries.com/v3.1/all 
2. Приложение - список карточек стран, на которых отображена краткая информация о каждой, размещено изображение с флагом страны. 
3. На карточке размещена иконка лайка. При нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана
4. На карточке размещена кнопка удаления. При нажатии на которую, карточка удаляется.
5. Данные изменения сохраняются в localStorage и после обновления страниц сохраняются.
6. Для возврата к исходному состоянию списка добавлена кнопка "сброс"
7. Сверху расположена кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки.
8. При клике на любом месте карточке(кроме иконки лайка и кнопки удаления) осуществляется переход на отдельную страницу карточки. Уже в ней мы видим полный текст карточки.Так же на этой странице должна быть кнопка вернуться к списку карточек

## Технологический стек:

React
Redux/toolkit
React Router
+ TypeScript + Vite