# react-qbootstrap

The bootstrap project generated automatically by the following node module:

[react-qbootstrap-typescript-generator](https://www.npmjs.com/package/react-qbootstrap-typescript-generator)

It generates a react redux application with typescript and other features you can read about below.

## Scripts

The package.json already includes the following scripts ready to be used:

- **start**: Run the application through webpack-dev-server opening the browser and listening at http://localhost:8080/ , with live reload enabled
- **build**: Publish the bundle through webpack at the subfolder _dist_ of your project
- **test**: Executes the unit tests through jest watching for changes with live reload
- **test-single-run**: Executes the unit tests through jest and exits at the end of the tests execution
- **test-coverage**: Executes the script _test-single-run_ creating the current coverage of the tests at the subfolder _coverage_ of your project
- **test-update-snapshots**: Updates the snapshots through jest

## Features

The following features are working in the project, and ready to be used if you want to:

- **redux**: Redux is already set up in the project, with redux-thunk added too. You already have a fake store with a fake reducer defined in the application, which you can delete when you will add your real store, reducers and actions. Change also the store interface according to your real data model of the application.
- **api interfacing**: There is a service called `http-proxy.service.ts` which already implements a custom class for interfacing with an api, through _axios_ for performing the http requests, providing few custom methods for _GET, POST, PUT, DELETE_. The project already includes also _rxjs_ if you want to manage async code through that library, otherwise you can get rid of it.
- **routing**: The project already includes the _react-router_ library for managing routing, and a first test route for the home route, which can be deleted when you are implementing your own routes.
- **linting**: Linting already added in the project, with few custom rules in the `tslint.json` file and few extensions. Feel free to add, change or remove whatever rule or extensions.
- **testing**: Testing already enabled in the app with few tests already implemented, for the code which should not be changed, and even for the code that could be deleted, to work as guideline for implementing your own tests. There is already the watch mode implemented, the single run, and the coverage, which can be then accessed inside the `coverage` main folder in your project. _enzyme_ is already added in the project and it's ready to be used.
- **prettier**: For code formatting, you can use _prettier_ whose options are defined inside the `.prettierrc` file. Feel free to change all the rules you want to use, or to remove it and clean up the related packages if you don't want to use _prettier_ at all.
- **styling**: SASS and CSS are already supported by the project. It's available also the _bootstrap_ library everywhere in your components.
- **timing**: For managing times and dates, the _moment_ library is already included in the project and it is ready to be used.
- **reactstrap**: The React implementation of bootstrap components. You can find several useful components, even for the layout. Feel free to remove it if you don't want to use this library at all.
- **versionng**: If you are using _git_, the `.gitignore` file is already set up in the project. If you want to use another versioning tool, feel free to remove this file.

## Structure

An brief explanation of the structure and the folders of the application.

- **architecture**: Instead of grouping for categories (actions, reducers, components, etc...), the group is made by concepts/modules. Grouping by categories works fine if the project is not a wide project, otherwise it shows few lacks, because for understanding some blocks of your application, you may finish to open a lot of different folders and subfolders of your application. In addition, with that approach, if you want to reuse some logic of your application, you have to copy single files from different folders. On the other hand, grouping by concepts, you can make the application more ordered, because a single folder contains already all the files needed by that concept. At the same time, If in the future you want to reuse some module in another application, you can simply copy the folder. Actions, reducers, containers and presentationals, should be all defined inside the folder which groups them. An example can be the _app_ folder or the _home_ folder. It includes also the definition of all the routes of the application.
- **app**: The main app presentational and container components, with the fake reducer associated at the beginning to the application. The app presentational component includes also the global _sass_ file of the application, located in `assets`, and the _css_ of the _bootstrap_ library.
- **redux**: As per redux pattern, define your presentational and container components (also known as smart and dumb components), and your actions and reducers. The convention used in the project is to use the `.presentational` suffix for presentational/dumb components, `.container` suffix for container/smart components, `.actions` suffix for the actions and `.reducers` suffix for the reducers.
- **routers**: The application routing is defined inside the `routes` subfolder. There is an `app.routes.tsx` component which defines all the routes implemented in the application, and the redirect rules. Every route is associated to what I like to call "Router Components", which are actually presentational components associated to a route, and they are responsible for accessing the navigation parameters (if provided), and then pass them to the container/presentational component used in that route. In this way the logic of the navigation is kept seprated by the logic of the components which display the data in that particular route (page). The convention used here is to use `.router` as suffix for these components.
- **tests**: The tests are defined in the same folder where the file to be tested is located. This keeps the test closer to the "source file", and they are prefixed with `.spec`. The _jest_ configuration is located in the `jest.config.js` file in the root folder. The folder `test` provides the preprocessor for typescript, the mock for the styles, the incluson of _enzyme_ and its adapter for react, and the mock for the animations.
- **services**: All the applications execute general tasks in order to achieve their goals. These tasks are usually provided by what I like to call "services". A good example could be the interfacing with an api, or with a socket for example. The `services` folder keeps all these services, which usually are reusable generic code, shared by applications.
- **store**: The `store` folder contains the global store of the application and the list of all the reducers defined by the app and provided to the store when creating the app.
- **assets**: General styles and general images used by the application.

## Instructions

After generated the project with the generator, follow the next instructions for removing useless/fake code provided for example purposes:

1. Change the title of your application inside the `index.html` file.
2. Change the `package.json` file adding your homepage, repository, name, author, and all the other properties you want to setup.
3. If you don't want to use git or to version the project, remove the `.gitignore` file in the root folder.
4. Add the `README.md` file to your project if you want to provide the documentation of your project.
5. After adding your first reducer, remove the sample `app.reducer.ts` file from the `app` subfolder and its inclusion inside the `reducers.ts` file in the `store` folder.
6. After defining your store, delete the property `title` from the store, which was created as example.
7. Remove the sample home route if you don't want to use it.
8. Remove the home folder if you don't need to have a main home component.
