import { Router } from "express";
//vælger Router fremfor hele express library

const weekRouter = Router();

export default weekRouter;

//todo: hvorfor virker \n ikke? 

// skal jeg komme ind på nodemon + type coersion også? står ikke som learning goals, 
// men vi har lært det? overvej
// Referential transparency ? 
// hoisting ? 
// express - ikke som router? 
// data typer
// Can explain what Node.js is and how to run files with it.
// Clean code / code conventions.  Can argue why clean code and following code conventions is a good idea.
// Sending data with GET requests
// Understand scoping in Javascript and know to always use const if you can get away with it otherwise let.
// Should contain all the tools we’ve used and explain them. - nodemon? + ? 


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
      weeksId: 1,
      title: "Lesson 1",
      subEntries: [
        {
          subEntriesId: 1,
          subTitle: `Git`,
          text: "i.	Versionsstyringprogrammet, lokalt på min maskine. Det github er bygget op omkring. ii.	Git er versionsstyring. Github er et lag udover dét, software configuration management.\n iii.	Manage and keep control of version. Github is a cloudbased hostingservice, that lets you manage git repositories."
          + "iv.	Bl.a. branches, main, dev, features."
          + "v.	Git actions"
          + "vi.	Git?\n"
          + "\r\n"
          + "vii.	add, commit, push → to project on GitHub\n\n\n\n\n"
          + "\r\n"
          + "viii.	har en remote branch på github. pull requests er en github ting. Kunne også have brugt gitlab og en azure stepup. Github er bare den hjemmeside vi har valgt at bruge til at administrere vores projekter.\n"
          + "x.	Git er  noget vi har på vores computer, github er det sted vi har valgt at manage vores projekt."
        },
        {
          subEntriesId: 2,
          subTitle: `REST API`,
          text: ` skal jeg skrive noget om crud? + ville nodemon og type coersion også passe ind i lektion 1?
          
          A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding.

          What's an API?
An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response). For example, the API design for a weather service could specify that the user supply a zip code and that the producer reply with a 2-part answer, the first being the high temperature, and the second being the low.  

In other words, if you want to interact with a computer or system to retrieve information or perform a function, an API helps you communicate what you want to that system so it can understand and fulfill the request. 

You can think of an API as a mediator between the users or clients and the resources or web services they want to get. It’s also a way for an organization to share resources and information while maintaining security, control, and authentication—determining who gets access to what. 

Another advantage of an API is that you don’t have to know the specifics of caching—how your resource is retrieved or where it comes from.


REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines. 

Something else to keep in mind: Headers and parameters are also important in the HTTP methods of a RESTful API HTTP request, as they contain important identifier information as to the request's metadata, authorization, uniform resource identifier (URI), caching, cookies, and more. There are request headers and response headers, each with their own HTTP connection information and status codes.

In order for an API to be considered RESTful, it has to conform to these criteria:

A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.
Stateless client-server communication, meaning no client information is stored between get requests and each request is separate and unconnected.
Cacheable data that streamlines client-server interactions.
A uniform interface between components so that information is transferred in a standard form. This requires that:
resources requested are identifiable and separate from the representations sent to the client.
resources can be manipulated by the client via the representation they receive because the representation contains enough information to do so.
self-descriptive messages returned to the client have enough information to describe how the client should process it.
hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all other currently available actions they can take.
A layered system that organizes each type of server (those responsible for security, load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.
Code-on-demand (optional): the ability to send executable code from the server to the client when requested, extending client functionality. 
Though the REST API has these criteria to conform to, it is still considered easier to use than a prescribed protocol like SOAP (Simple Object Access Protocol), which has specific requirements like XML messaging, and built-in security and transaction compliance that make it slower and heavier. 



        `,
        },
      ],
    },
    {
      weeksId: 2,
      title: "Lesson 2",
      subEntries: [
        { subEntriesId: 1,
          subTitle: `Variables`,
          text: `Noget om data typer? 
          Variables are containers for storing data (storing data values).
          var, let, const
          vi bruger const når vi kan og let når vi ikke kan
          let er hvis variablen kan ændre sig. 

          eksempel:
          const price1 = 5;
          const price2 = 6;
          let total = price1 + price2;


          deklarér en variable:
          let carName;

          nu er den undefined. har ingen value. 
          giv den value: 
          carName = "Volvo";

          kan også gøre det med det samme:
          let carName = "Volvo";
          deklareret + value på samme tid. 

          It's a good programming practice to declare all variables at the beginning of a script.


          `,
        },
        { subEntriesId: 2,
          subTitle: `Functions`,
          text: `Functions i javascript? Ikke køres oppefra og ned, men køres allesammen samtidig? 
          
          A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

syntax:
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.



Invocation:  
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)


You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.




          `, 
        },
        { subEntriesId: 3,
          subTitle: `Callback Functions`,
          text: `In computer programming, a callback or callback function is any reference to executable code that is passed as an argument to another piece of code; that code is expected to call back the callback function as part of its job.
          bliver ikke kaldt, bliver sendt videre
          bliver måske aldrig kaldt. 
          en reference til en eksekverbar kode. 
          sender en funktionsreference videre som et argument. 
          enhver funktionsreference der bliver videresendt som et argument. 
          en funktion, der bliver sendt videre som et argument. 
          
          `, 
        },
      ],
    },
    {
      weeksId: 3,
      title: "Lesson 3",
      subEntries: [
        { subEntriesId: 1,
          subTitle: `Arrow Functions`, 
          text: `Arrow functions allow us to write shorter function syntax.


          `,
         },
        { subEntriesId: 2, 
          subTitle: `Loops`, 
          text: `//forEach
          //map, reduce, filter - vi skal holde os til disse loops. Hvis vi gør det, reducerer vi også mange typer bugs, der opstår ved ikke-funktionel kode
          
          Loop advice:
          map = mapper til et array af samme størrelse
          filter = callback i filter tager imod en predicate, hvis den er true i filter, bliver den tilføjet, hvis den er false bliver den sorteret fra
          
          Only use loops if you are doing "finger couting".
          I.E. if counting to a number.
          
          Only use forEach if you are doing something and dont care about the sult.
          I.E. populating the DOM with elements. 
          
          Use:
          Map for mapping 1:1
          Filter for filtering the array.
          Reduce to reducing the content of the array. Anders forventer ikke at vi kan bruge reduce.
          
          `, 
        },
        { subEntriesId: 3,
          subTitle: `Import & Export`, 
          text: `bruger vi i: 
          app.js:
          import express from "express";
import loginRouter from "./routers/loginRouter.js";
import weekRouter from "./routers/weekRouters.js";

templateEngine.js: 
import fs from "fs";
export function

          `, 
        },
      ],
    },
    {
      weeksId: 4,
      title: "Lesson 4",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `CRUD`, 
          text: `Put: replacer hele ressourcen
          Patch: replacer dele af ressourcen
          Det key value pair der defineres til sidst, er det der bliver gemt. 
          
          create, read, update, delete, yeah yeah the time-knife, we've all seen it
          `, 
        },
        { subEntriesId: 2, 
          subTitle: `Fetching`, 
          text: `The fetch() method starts the process of fetching a resource from a server.

          The fetch() method returns a Promise that resolves to a Response object.
          `, 
        },
        { subEntriesId: 3, 
          subTitle: `Package.json`, 
          text: `Nyt projekt:
          I terminalen: npm install express eller npm i eller npm i express
          opret: package.json
          opret: app.js
          test om den kører: node app.js eller nodemon.cmd app.js
          Package.json = vores entry point til vores projekt
Json er altid gåseøjne. En af forskellene fra javascript.


I package.json definerer vi versioner. Har ikke præcis versionsstyring. 
I package-lock.json får vi meget præcise informationer om den version der er blevet installeret. 
Hvis der er problemer med ”jamen det virker på min computer” så sammenlign jeres package-lock.json filer

Hvilken fil skal jeg skabe for at definere entrypoint til mit projekt?
Package.json

          
          `, 
        },
      ],
    },
    {
      weeksId: 5,
      title: "Lesson 5",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `Environment variables`, 
          text: `Hvordan starter man et script
          Env variabler
          Tools: nodemon, npm, cross-env


          learning goal: Understands what problem that cross-env solves.
          
          `, 
        },
        { subEntriesId: 2, 
          subTitle: `Redirecting`, 
          text: ` Redirection: \n 
Hvordan redirecter man. A-tag. Anchor-tag.
Kan også gøre det med replace
Eller med et meta-tag. 
<meta http-equiv = "refresh" content ="3; url =/battle" />
”how to programmatically redirect” <- google søgning 


          `, 
        },
      ],
    },
    {
      weeksId: 6,
      title: "Lesson 6",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `CSR`, 
          text: `text3 for subtitle 1
          Serverside vs clientside
          Serverfiler: app.js, package.json, package-lock.json, node_modules, .igitignore, LICENSE, README.md
          Klientfiler: alt i public-mappen


          Client Side Rendering means generating the HTML components on the browser side, by executing Javascript code within the browser that manipulates the HTML DOM to build the HTML nodes.


          `, 
        },
        { subEntriesId: 2, 
          subTitle: `SSR`, 
          text: `
          Server Side Rendering means generating the HTML for a webpage on the server side.

SSR-at request time: Server side rendering may happen at request-time, in which case the server dynamically generates the HTML for each URL request at run time.
This is also called Dynamic Server Side Rendering.
SSR-at build time: Alternatively, the HTML for the web pages may be pre-generated on the server side at “build” time, and this pre-generated static HTML is returned to the browser, when the webpage is requested
i.e. HTML is pre-generated, and is not generated on the fly at request-time.
This is also called Pre-rendering.


All the browser has to do is parse this HTML to generate the HTML DOM and display the web page.

Server Side Rendering can be done at build time, which pre-generates the HTML, or Server Side Rendering can be done at request time for each incoming request from the browser.

Dynamic Server Side Rendering(SSR) i.e. Server Side Rendering at request-time, requires a web-server running at run-time, to receive the navigation requests, fetch external data (on the server-side), dynamically generate the HTML, and then return the fully formed HTML to the browser.

Websites that are built using traditional server-side languages like PHP, ASP.NET (ASP), Java (JSP), Ruby, etc. are fully Server Side Rendered.

Note that browsers only understand HTML, CSS and Javascript, and the server-side languages (i.e. PHP, .NET, Ruby etc) basically programmatically generate HTML on the server-side and then send that HTML to the browser.

So whether you are using PHP, or Java, or Ruby, as your backend language, in SSR they all generate HTML that is returned to the browser. The server-side languages typically use some web framework and HTML templating during development to facilitate the generation of the HTML on the server-side.

Advantages of SSR
Better SEO and page ranking, since the HTML is fully formed on the server-side and web crawlers are more easily able to index the HTML pages.
Faster load time for the initial page render that a CSR App, since the HTML received from the server can be quickly parsed by the browser and displayed immediately, and does not require a separate JS bundle to be downloaded and executed to display the webpage.
Once the web page is visible in the browser it is fully interactive
i.e. FCP = TTI
Since the HTML for the webpage is generated on the server-side, the webpage will display even if the browser Javascript is disabled.
          `, 
        },
      ],
    },
    {
      weeksId: 7,
      title: "Lesson 7",
      subEntries: [
        { subEntriesId: 1, 
          subTitle: `Injecting data`, 
          text: `to do 
          `, 
        },
        { subEntriesId: 2, 
          subTitle: `Express routers`, 
          text: `bruger vi i app.js 
          `, 
        },
      ],
    },
  ];