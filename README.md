# BetterRX Coding Challenge
## Overview
I created this NPI Record Viewer as part of the hiring process for BetterRx. The application is fully deployed at [npi.jpeckham.com](https://npi.jpeckham.com).

### Technologies Used

#### Backend
- [Laravel](https://laravel.com/)
- [InertiaJS](https://inertiajs.com/)

#### Frontend
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

#### Deployment
- [Oracle Cloud Infrastructure](https://www.oracle.com/cloud/)
- [Ubuntu 22.04](https://ubuntu.com/)
- [Nginx](https://www.nginx.com/)

### Screenshot

<a href="https://npi.jpeckham.com">![Screenshot of https://npi.jpeckham.com](https://jpeckham.com/npi_screen.webp)</a>

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
To watch for changes, and output *meaningful* error messages, you can run the following command.
```bash
npm run dev
```

## Serving the Application
You can serve the application using the built-in PHP server.
```bash
php artisan serve
```
## Testing

### Manual Testing
On MacOs Ventura:
- ✅ Chrome
- ✅ Firefox
- ❌ Safari (I had visual issues and poor rendering performance.)
- ✅ Arc

On Ubuntu 22.04:
- ✅ Firefox
- ❌ Falcon (Had similar issues to Safari on MacOs.)

On Windows 10:
- ✅ Chrome
- ✅ Firefox

On iPhone:
- ✅ Safari
- ✅ Chrome

### LightHouse Report

![LightHouse Report](https://jpeckham.com/npi_lighthouse.webp)

### Automated Testing
You can run the tests using the following command.
```bash
cowsay "LOL just kidding, I didn't write any tests"
```
