# Multipurpose dashboard


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Plugins](#plugins)
* [Project Structure](#project-structure)
* [Setup](#setup)

## General info
This project is a dashboard for multipurpose usage I developed using vue3, vite, typescript, tailwindcss and more.

### [Demo](https://vuetail-dashboard.vercel.app/)

## Technologies
This Project was created by using:
- [Vue3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwindcss](https://tailwindcss.com/)

## Features
- Using Vuejs v3 with typescript support.
- Using Vue3 [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).
- Using dependency injection design pattern for API backend services endpoints.
- Using [Pinia](https://pinia.vuejs.org/) for state management.
- Multi language support using [I18n](https://vue-i18n.intlify.dev/) plugin.
- Added lots of common UI components using tailwindcss.

## Plugins
- [Vee Validate v4](https://vee-validate.logaretm.com/v4/)
- [Yup](https://github.com/jquense/yup) as a schema builder for validation with vee-validate
- [I18n](https://vue-i18n.intlify.dev/)
- [Vue3 perfect scrollbar](https://github.com/mercs600/vue3-perfect-scrollbar)

## Project Structure
```bash
├── public  
│    └── favicon.ico                               
├── src  
│    ├── assets
│    │    ├── css
│    │    ├── icons
│    │    ├── imgs
│    │    └── scss                  
│    ├── components
│    │    ├── buttons    
│    │    ├── form    
│    │    ├── helpers    
│    │    ├── icons    
│    │    ├── modal    
│    │    ├── table    
│    │    ├── ui    
│    │    └── widgets    
│    ├── data   
│    ├── layouts
│    │    ├── auth    
│    │    └── dashboard                     
│    ├── plugins                     
│    ├── router                     
│    ├── stores                     
│    ├── types                     
│    ├── validations                     
│    ├── views                     
│    ├── App.vue                     
│    └── main.ts                     
├── .eslintrc.cjs                    
├── .gitignore                   
├── .prettierrc.json
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.ts
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
## Setup
To run this project, install it locally using npm:

```
$ cd vuetail-dashboard
$ npm install
$ npm run dev
```

#### Building for Production

```sh
$ npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
$ npm run lint
```

