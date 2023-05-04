# BetterRX Coding Challenge
## Overview
I created this NPI Record Viewer as part of the hiring process for BetterRx. The application is fully deployed at
[npi.jpeckham.com](https://npi.jpeckham.com). The application is built using PHP, Laravel, and React with InertiaJS as the glue.

## Screenshot

![Screenshot of https://npi.jpeckham.com](https://jpeckham.com/npi_screen.webp)

## Installation
Once you have cloned the repository, you will need to install the dependencies for both the PHP and React applications.
```bash
composer install && npm install
```
You will also need to create a `.env` file in the root of the project. You can copy the `.env.example` file and tweak it to your needs.
```bash
cp .env.example .env
```
Finally, run Vite to compile the React application.
```bash
npm run build
```
## Serving the Application
You can serve the application using the built-in PHP server.
```bash
php artisan serve
```
## Running Tests
You can run the tests using the following command.
```bash
cowsay "LOL just kidding, I didn't write any tests"
```

