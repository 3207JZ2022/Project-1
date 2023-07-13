# Project1

This is a frontend website for e-commerce. It is designed to provide a user-friendly interface for customers to browse and purchase products online. The website is built using Angular and services such as Firebase Authentication and Realtime Database REST API to provide a seamless experience for users. The website is responsive and can be accessed from any device.

This project is hosted at [e-commerce-3f333.web.app](https://e-commerce-3f333.web.app/).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Feature

* Responsive website using firebase authentication and realtime database rest api. 
* Use ngrx to fetch and update the state.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Known Issues

The size of the carousel in the home page is defined during initialization. This means it will not adjust properly if you just rotate the screen. The reason is that I want to keep my carousel highly modifiable and take input directly from the developer. I try not to abuse JavaScript to cause any unnecessary burden on the website. I may consider making it fully responsive for an authentic aspect. 
The deal list in the home page may not display properly because currently, I make it display all fetched products. Ideally, it should only display four products per use.

## Last Updated: 07/13/2023
