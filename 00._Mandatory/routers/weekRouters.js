import { Router } from "express";
//vælger Router fremfor hele express library

const weekRouter = Router();

export default weekRouter;


weekRouter.get("/ses/:id", (req, res) => {
  //console.log("vi er i weekrouters id");
    const week = weeks.find(
      (week) => week.weeksId === Number(req.params.id)
    );
    res.status(200).send({ data: week });
  });
  
  weekRouter.get("/weeks", (req, res) => {
    res.status(200).send({ data: weeks });
  });


  const weeks = [
    {
      weeksId: 0,
      title: "Silke",
      subEntries: [
        {
          subEntriesId: 1,
          subTitle: `
          Welcome. On this page I'll share my notes from class, seperated by week. I hope you enjoy them :)`,
          text: `
          ♡ Lesson 1: Git ♡ REST API
          
          ♡ Lesson 2: Variables ♡ functions ♡ callback functions
          
          ♡ Lesson 3: Arrow functions ♡ loops ♡ import ♡ export
          
          ♡ Lesson 4: CRUD ♡ fetching ♡ package.json
          
          ♡ Lesson 5: Environment variables ♡ redirecting
          
          ♡ Lesson 6: CSR ♡ SSR
          
          ♡ Lesson 7: Injecting data ♡ Express routers

          `
        }
      ]
    },
    {
      weeksId: 1,
      title: "Lesson 1",
      subEntries: [
        {
          subEntriesId: 1,
          subTitle: `Terminal commands and git`,
          text: `
          Git is a version control system locally on your machine. Git is what Github is built around.
          Github is a layer above git, a software configuration management, to manage and keep control of version.
          Github is a cloudbased hostingservice, that lets you manage git repositories. 
          
          Git is something on our computer, while Github is the place we have chosen to manage our project.
          
          In our terminal, aside from using git, we also use Nodemon this semester with NodeJS.
          Nodemon monitors changes in our source and automatically restarts the server, meaning we can see the changes instantly, instead of manually stopping and starting our server. 
          
          The image here shows the terminal command for using nodemon.`,
          imageUrl: "./pages/images/nodemonEx.png",
        },
        {
          subEntriesId: 2,
          subTitle: `REST API`,
          text: `
          An API is a set of definitions and protocols for building and integrating application software. It's sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response). 
          
          It's a way to share resources and information, eg. as in the Pokemon project we did.
          APIs can contain any kind of information.
          For our first assignment we designed our own API. See image below.`,
        imageUrl: "./pages/images/apiDesign.png",
        },
      ],
    },
    {
      weeksId: 2,
      title: "Lesson 2",
      subEntries: [
        { subEntriesId: 1,
          subTitle: `Variables`,
          text: ` 
          Variables are containers for storing data or data values.
          
          In JavaScript we use the data types:

          ♡ var
          ♡ let
          ♡ const
          
          We use const whenever we can and let when we can't.
          let is used if the variable can change later. 

          It's a good programming practice to declare all variables at the beginning of a script.

          You declare a variable by datatype followed by the variable name:
          
                let scifiBook;

          The variable is now declare but undefined, as it has no value. 
          You give it a value like this: 
          
                scifiBook = "Murderbot Diaries";

          This can of course also be done in the same line:

                let scifiBook = "Murderbot Diaries";
          
          In this line the variable is both declared and given value. 
          `,
          imageUrl: "",

        },
        { subEntriesId: 2,
          subTitle: `Functions`,
          text: `
          JavaScript isn't run from upside down.
          
          A JavaScript function is a block of code designed to perform a particular task.
          
          A JavaScript function is executed when "something" invokes it (calls it).
          
          Syntax:
          ♡ A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
          ♡ The code to be executed, by the function, is placed inside curly brackets: {}
          ♡ Function parameters are listed inside the parentheses () in the function definition.
          ♡ Function arguments are the values received by the function when it is invoked.
          
          The code inside the function will execute when "something" invokes (calls) the function:
          This can mean:
          ♡ When an event occurs (eg. when a user clicks a button)
          ♡ When it is invoked (called) from JavaScript code
          ♡ Automatically (self invoked)

          `, 
          imageUrl: "",

        },
        { subEntriesId: 3,
          subTitle: `Callback Functions`,
          text: `
          In computer programming, a callback or callback function is any reference to executable code that is passed as an argument to another piece of code; that code is expected to call back the callback function as part of its job.
          Callback functions might never be called. 
          They are a callback (reference) to an executable code. 
          They send a callback function (funktionsreference) along as an argument.  
          `, 
        imageUrl: "./pages/images/callback.png",
        },
      ],
    },
    {
      weeksId: 3,
      title: "Lesson 3",
      subEntries: [
        { subEntriesId: 1,
          subTitle: `Arrow Functions`, 
          text: `
          Arrow functions allow us to write shorter function syntax.
          `,
          imageUrl: "./pages/images/arrow.png",
         },
        { subEntriesId: 2, 
          subTitle: `Loops`, 
          text: `
          In JavaScript, we should stick with these types of loops:

          ♡ map
          ♡ reduce
          ♡ filter
          
          If we do so, we will also reduce the amount of bugs that arise through non-functional code.
          
          Loop advice:
          map = maps to an array of the same size
          filter = callback in filter receives a predicate. If it is true in filter, it will be added, while if it is false, it will get sorted.
          
          Only use loops if you are doing "finger couting".
          I.E. if counting to a number.
          
          Only use forEach if you are doing something and don't care about the result.
          I.E. populating the DOM with elements. 
          
          Use:
          Map for mapping 1:1
          Filter for filtering the array.
          Reduce to reducing the content of the array. Though it is not expected that we can use reduce this semester.
          
          `, 
          imageUrl: "./pages/images/loop.png",

        },
        { subEntriesId: 3,
          subTitle: `Export`, 
          text: `
          We use export to export functions.  
          We have used both export and import in our brief Dart project.
          See image below for example of export.
          `, 
          imageUrl: "./pages/images/export.png",

        },
        { subEntriesId: 3,
          subTitle: `Import`, 
          text: `
          We use import to import from libraries and from other files. 
          Eg. in our app.js files we often import express and other routers. 
          It might look something like this: 

          import express from "express";
          import loginRouter from "./routers/loginRouter.js";
          import weekRouter from "./routers/weekRouters.js";

          In our templateEngine.js we imported fs (FileSync). It looked like this: 
          
          import fs from "fs";

          For an example of import in our Dart project, see image below.
          `, 
          imageUrl: "./pages/images/import.png",

        },
      ],
    },
    {
      weeksId: 4,
      title: "Lesson 4",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `CRUD`, 
          text: `
          CRUD stands for Create, Read, Update, Delete and are the pillars of operating data.
          Hopefully by now we all understand CRUD well.
          I'll only add these notes then:
          
          Put: replaces the entire ressource
          Patch: replaces parts of the ressource
          
          What ever key-value pair is defined last, is what's saved. 
          `, 
          imageUrl: "./pages/images/weallknowcrud.png",

        },
        { subEntriesId: 2, 
          subTitle: `Fetching`, 
          text: `
          The fetch() method starts the process of fetching a resource from a server.

          The fetch() method returns a Promise that resolves to a Response object.

          Example of fetch from our Pokemon project: 
          `, 
          imageUrl: "./pages/images/fetch.png",

        },
        { subEntriesId: 3, 
          subTitle: `Package.json`, 
          text: `
          Package.json is our entry point to our project.
          Json content should always be writted with "". This is one of the major differences from JavaScript. 
          
          In package.json we define versions. 
          In package-lock.json we get very precise information about the version that has been installed.
          If you ever get in a "it works on my computer"-situation, it's a good idea to compare your package-lock.json files. 
          `, 
          imageUrl: "./pages/images/packagejson.png",

        },
      ],
    },
    {
      weeksId: 5,
      title: "Lesson 5",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `Environment variables`, 
          text: `
          Environment variables provide information about the environment in which the process is running.
          We use Node environment variables to handle sensitive data like passwords, which we shouldn't hard code, or configuration details that might change between runs, like what port a server should listen on.
          See example from earlier project where we use environment variable for our port:
          `, 
          imageUrl: "./pages/images/port.png",

        },
        { subEntriesId: 2, 
          subTitle: `Redirecting`, 
          text: `
          You can redirect by using an a-tag or an achor-tag.
          You can also redirect with "replace" or with a meta-tag.
          `, 
          imageUrl: "",

        },
      ],
    },
    {
      weeksId: 6,
      title: "Lesson 6",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `CSR`, 
          text: `
          Client files are everything in our public-folder.

          Client Side Rendering means generating the HTML components on the browser side, by executing Javascript code within the browser that manipulates the HTML DOM to build the HTML nodes.
          
          Example of CSR from this project:
          `, 
          imageUrl: "./pages/images/csr.png",

        },
        { subEntriesId: 2, 
          subTitle: `SSR`, 
          text: `
          Serverside files are: app.js, package.json, package-lock.json, node_modules, .igitignore, LICENSE, README.md

          Server Side Rendering means generating the HTML for a webpage on the server side.
          
          See example of SSR from this project:
          `, 
          imageUrl: "./pages/images/ssr.png",

        },
      ],
    },
    {
      weeksId: 7,
      title: "Lesson 7",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `Injecting data`, 
          text: `
          Example of injected data in this project:
          `, 
          imageUrl: "./pages/images/inject.png",

        },
        { subEntriesId: 2, 
          subTitle: `Express routers`, 
          text: `
          Express Router is a routing mechanism that refers to how an application's endpoints (URIs) respond to client requests.

          We use express routers in our app.js file.
          The beginning of the app.js file might look something like this: 
          `, 
          imageUrl: "./pages/images/express.png",

        },
      ],
    },
  ];