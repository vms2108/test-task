# Тестовое задание

## Дано

1. AppComponent - родительский компонент
2. FirstTypeComponent, SecondTypeComponent - дочерние компоненты
3. src/app/store - здесь хранилище с использованием библиотеки ngrx
4. src/app/common/services/variant.service - здесь сервис, с фейковым бэкендом, возвращает вариант отображения.

## Как запустить

- клонировать
- создать новую ветку и переключиться на неё
- выполнить команду npm i --force
- выполнить команду npm run start

## Задание

1. После запуска приложения получить вариант и записать его в хранилище.
2. В зависимости от варианта в хранилище отобразить компонент первого типа или второго типа.
3. Подставить свойства варианта на нужные места в дочерние компоненты.
4. Цену отображать с соответствующим значком валюты.
5. Добавить таймер обратного отсчета внизу страницы в виде "Предложение действительно в течении 10:00". Где 10 - это минуты, 00 - секунды.

Выполненное задание залить на новую ветку (предварительно получить права на запись)
Написать потраченное время


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
