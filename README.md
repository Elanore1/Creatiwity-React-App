# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This application is a ReactJS application in [Typescript] (https://www.typescriptlang.org/download) representing a dynamic Book where the user can add pages (text content or image content), edit created pages and naviguate through each page of the book. 

## Installation 

For Modal dialog component (Add and Edit component): 
> npm install @headlessui/react

## Usage

 - Clone this repository, from your local machine :

```bash
git clone https://github.com/Elanore1/Creatiwity-React-App.git
```

-   Install all dependencies (use yarn or npm):

```bash
npm install
```

- Run/Build the application :

```bash
npm run build
```

## Project Structure

The project is structure this way :

```txt
/
├── src/
    ├── components/     # Folder for components
        ├── AddPageModal.tsx  # Component used to add pages in the book
        ├── Book.tsx    # Component representing the dynamic book
        ├── EditPageModal.tsx # Component used to edit pages of the book
        ├── Page.tsx    # Component showing a page content based on it's type
    ├── styles/         #Folder for CSS styles
        ├── App.css
        ├── index.css
    ├── types/         #Folder for TS types
        ├── PageProps.ts
    ├── App.tsx
    ├── index.tsx     
├── README.md
├── .gitignore
├── tsconfig.json
├── package.json
├── package-lock.json
```

We have also a TS interfaces representing a Page and it's attributes : 

```typescript 
// Attribut of a page 
export interface PageProps {
    content: string;
    type: 'image' | 'text'; // if image or texts
}
```

### Run the application

- Start the application : 

```bash
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Authors

- Elanore LELIEVRE
