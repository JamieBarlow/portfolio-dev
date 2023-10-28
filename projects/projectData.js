const projectData = {
  slidingPuzzle: {
    title: "Sliding Puzzle",
    stack: ["HTML", "JavaScript", "p5.js"],
    code: "https://github.com/JamieBarlow/sliding-puzzle-p5",
    live: "https://jamiebarlow.github.io/sliding-puzzle-p5/",
    about:
      "This sliding puzzle was inspired by collaboration with a graphic designer, whose brief was to present a landing page for a healthcare organisation in an eye-catching and educational way. We chose to include a sliding puzzle, as a creative and dynamic way of displaying information, so I opted to build this interactive component for the design.",
    purpose: [
      "The puzzle isn't simply there for decoration - it would also allow the client to display a relevant fact under each tile, inspiring curiosity. At the same time, the format is immediately recognisable and intuitive to many users. The aim is to hold the user's interest while they attempt the puzzle, but also to not lock the user out of any key element of the experience, by making this dependent on them finishing the puzzle (which can be surprisingly difficult!) - completion is very much an optional 'bonus' (with a small reward).",
    ],
    features: [
      "Flexible design - the puzzle automatically cuts and shuffles any image, without needing to manually create 'tile' assets;",
      "Board length and width can also be defined as needed;",
      "Manual 'reshuffle' button (for testing purposes or as client desires);",
      "Custom randomization factor",
    ],
    webStack: [
      "Written in JavaScript, with <a href='https://p5js.org/'>p5.js</a> for drawing the canvas. When beginning production of the app, I had just learned some of the creative applications of JavaScript's <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'>canvas API</a>, but realised that some additional functionality (such as the visual auto-shuffle on page load) could be achieved more easily and efficiently with the p5.js library, which uses many canvas API features under the hood. This involved some refactoring, but the resulting code was easier to maintain and therefore update, ultimately saving some production time.",
    ],
    challenges: [
      "Sliding puzzles are familiar, but conceptualising how the puzzle could be built with programming logic, proved to be a puzzle in itself. My solution involved creating a fixed 'board' of tiles which could register the position of the user's mouse click, as well as a means of breaking up a source image into tiles, tracked with their own index numbers as they move. When the user clicks a tile, the program would need to find the location of the blank tile, before swapping their positions (the canvas actually 'redraws' on each click).",
      "The toughest challenge was discovered during testing- I learned that in some cases, randomised tile placement meant the puzzle was actually unsolvable. The solution involved reverse-engineering from a completed puzzle, with rules imposed so that each step of the 'shuffle' could only happen if the randomly-selected tile was adjacent to a blank tile, and swapping with it directly. This also required a greater amount of randomization, because there are fewer possibilities for movement on each iteration. As a result I built in a randomization index to quickly test the impact of the number of individual shuffle 'attempts' on the overall level of shuffling, and potentially the difficulty of the puzzle.",
    ],
    lessons: [
      "While some change will be inevitable throughout development and testing, mapping out the design logic further to anticipate issues before writing code could have helped to avoid some rewriting and refactoring.",
      "In future I would also consider where well-chosen libraries can make implementation easier, though the process of learning the canvas API, as I wrote the initial program, was also valuable.",
    ],
    images: {
      header: "puzzle-pitch",
      features: "puzzle-screenshot",
      tech: "puzzle-complete",
      challenges: ["puzzle-split",
        "puzzle-mockup"]
    },
    otherProjects: {
      schillingerRtm: {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      directDebits: {
        title: "Direct Debit Date Calculator",
        previewImg: "dd-calculator",
        link: "directDebits",
      },
    },
  },
  directDebits: {
    title: "Direct Debit Processing Calendar",
    stack: ["HTML/CSS", "JavaScript", "BootStrap", "Mocha.js / Chai.js"],
    code: "https://github.com/JamieBarlow/weekend-bankhol",
    live: "https://dd-calculator.web.app/",
    about:
      'Single page web application deployed by a large-scale organisation to calculate Direct Debit processing days for a selected year by accounting for weekends, bank holidays and other non-work days. Uses the UK Government\'s <a href="https://www.api.gov.uk/gds/bank-holidays/#bank-holidays">Bank Holidays API</a> to fetch data dynamically.',
    purpose: [
      'Companies who operate a <a href="https://www.directdebit.co.uk/">Direct Debit scheme</a> will rely on a processing calendar to determine their schedule for specific Direct Debit processes, in order to meet the <a href="https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/">Direct Debit guarantee</a>). Processing dates for both Service User and bank are determined by working days, and therefore need to be adjusted to account for bank holidays, weekends, and office closures. Determining when these dates are had proven to be a manual, surprisingly complex and error-prone process, and so this app was created to meet a real challenge / need for automation.',
      "Ultimately this app is designed to provide a reliable, consistent and maintainable means of determining Direct Debit processing days, mitigating error and risk - failure to generate this data correctly may result in multiple negative impacts that are difficult and/or costly to fix: missed or delayed submissions, payment reconciliation issues, knock-on impact on future claims, damage to reputation or the company's Service User status.",
      "The results are laid out in a format that fits the exact requirements of the Apps Support team for data loading, and can be copied to the clipboard with a single click.",
    ],
    features: [
      "Calculates and displays non-processing days (bank holidays and weekends) for a given year",
      "User can manually add and display company-specific non-processing days (e.g. Christmas or other holiday office closures)",
      "Displays results as processing dates for the organisation, broken down by type",
      "'Copy to clipboard' button for easy export of results table",
      'Test suite built using Mocha.js testing framework, Chai.js assertion library, and <a href="https://www.codecademy.com/article/tdd-u1-good-test">MC-FIRE</a> principles',
    ],
    webStack: [
      "For the app's core logic and functionality, I worked extensively with vanilla JavaScript, focusing on the JS Date object.", "The app makes calls to the UK Government's Bank Holidays API, which ensures that dates can be provided dynamically - for example, when extra bank holidays are created.", "The interface was built using BootStrap, which simplified formatting for its form and table elements, as well as offering a tabbed interface for a less cluttered display.", "For testing, I chose the Chai assertion library, because it can follow a familiar 'assert' style to that provided by Node.js, but is also browser-compatible, so allowed me to display test results from the Mocha framework to end users within the app window itself, along with additional message feedback.", "When writing my tests, I made sure to use a '3 test phase' format - Setup, Exercise, and Verify - to make the test code easier to read and maintain. I ran them as isolated unit tests, so didn't include a teardown stage.",
    ],
    challenges: [
      "To generate results, the app is comparing potential processing dates against the non-working days provided via API call (weekends and bank holidays), as well as company-specific holiday dates input by the user. If the 2 match, the app needs to not only shift the date backwards or forwards, but re-calculate the shift until there is no longer a clash. This required some complex nested looping logic, and testing for edge cases, including those where a non-processing day (or days) land(s) between dates where one needs to be 3 working days prior to another.",
      "The dates calculated in each column are dependent on each other - results are not always isolated to a specific calendar year, but can be impacted by e.g. non-processing dates in the previous calendar year, or can impact the subsequent calendar year. This therefore needed to be built into the app's logic as well.",
      "As I built the app, I made use of unit testing with Mocha/Chai to ensure that 'pure' functions, such as JS Date conversion, would provide consistent results. I also added testing for API calls to ensure that an array of dates would be returned, as expected. However, as there are many dependencies between functions for each calculation, I knew that this type of testing would not provide enough quality assurance, even if quantity of code coverage was high. I therefore decided to create mock result data to test the app's end-to-end functionality.",
      "For an in-depth list of this and other dev challenges, see the <a href='https://github.com/JamieBarlow/weekend-bankhol#development-challenges-and-lessons-wrench'>documentation</a>.",
    ],
    lessons: [
      "While I gained a lot of experience working with the Date object in JavaScript, I learned that there are JS date libraries which could simplify the process of converting and working with dates, thereby speeding up production.",
      "I also learned a great deal about testing, and the value of different types of tests; in this case, I created mock data to ensure the app's output would be correct, but I am looking to further explore the possibilities of integration and end-to-end testing using faking/stubbing tools such as <a href='https://sinonjs.org/'>Sinon.js</a>, and E2E testing suites such as <a href='https://www.cypress.io/'>Cypress</a>.",
    ],
    images: {
      header: "dd-calculator",
      features: "dd-bankhols",
      tech: "dd-companyhols",
      challenges: ["dd-companyhols",
      "dd-mochatests","dd-resultscopied"]
    },
    otherProjects: {
      schillingerRtm: {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      slidingPuzzle: {
        title: "Sliding Puzzle",
        previewImg: "puzzle-pitch",
        link: "slidingPuzzle",
      },
    },
  },
  yelpCamp: {
    title: "YelpCamp",
    stack: [
      "HTML/CSS",
      "JavaScript",
      "BootStrap",
      "Express",
      "MongoDB",
      "Node.js",
    ],
    code: "https://github.com/JamieBarlow/myYelpCamp",
    live: "https://myyelpcamp-c74110eebe2c.herokuapp.com/",
    about: "Full-stack CRUD application for campsite listings and reviews.",
    purpose: [
      "This is a web application allowing the user to create and review campgrounds, similar to a review site like Yelp or Tripadvisor.",
      "The project forms a major part of Colt Steele's Web Developer Bootcamp on Udemy. It features full CRUD (Create, Read, Update, Destroy) functionality, and is built using the MongoDB/Express/Node stack, with RESTful architecture (exposing CRUD functionality to users with a uniform interface). The app is styled using CSS and BootStrap components, and is also soon to be expanded with React components.",
      "YelpCamp has proved to be a fantastic first-hand learning exercise, working with the many fundamental considerations that go into fully building and launching a live full-stack application. This includes building on core CRUD functionality with a number of extra technologies to enhance features like form validation, user authentication, authorization/permissions, and multiple means of dealing with common security issues, along with additional UI features such as animated review ratings and geocoded cluster maps.",
      "Experience with this app has definitely inspired, and will form the foundation for, building future full-stack applications.",
    ],
    features: [
      "Register / login functionality, with server-side authentication and specific authorization/permissions for campgrounds linked to a user's id and session/cookie data;",
      "CRUD (Create, Read, Update/Edit, Destroy) functionality for campgrounds and reviews (for logged in users);",
      "Flash success/error messages providing user feedback for login, registration, and create/edit/delete actions;",
      "Client-side form validations using BootStrap, server-side data validation with Express (incl. custom error-handling middleware) and JOI;",
      "Multiple image uploading functionality;",
      "Cluster map displaying all campgrounds.",
    ],
    webStack: [
      "This project taught me to use a wide range of tech, building on the MongoDB/Express/Node stack with numerous libraries, while also making considered choices about the best tools for each task. For some key examples:",
      "I used <a href='https://ejs.co/'>EJS</a> to create page templates, with consistent 'partial' layout elements such as a navbar, footer and error messaging. The library also allowed me to embed or interpolate JS for dynamically updated content which could be linked to the user-specific authorization/permissions - for example, showing and hiding the option to leave a review depending on the user's login status, and the option to delete a campground or review only if they are the author of that particular campground or review.",
      "<video muted autoplay loop class='demoVid--halfPage'><source src='../images/yelpcamp-deleteReview.webm' type='video/webm' /></video>",
      'I used Express for server-side routing, due to its wide support and flexibility. I was able to extend its functionality with libraries such as <a href="https://www.npmjs.com/package/express-session">express-session</a>, <a href="https://www.npmjs.com/package/connect-flash">connect-flash</a>, <a href="https://www.npmjs.com/package/passport">Passport</a>, and <a href="https://www.npmjs.com/package/express-mongo-sanitize">express-mongo-sanitize</a>, while creating my own custom middleware for general error handling, handling async processes, and validation. This helped from a development perspective, while also improving the user experience with more useful feedback.',
      "Data persistence and relationships were managed with MongoDB, a noSQL database, and Mongoose, which extends this with the ability to define consistent data schemas/models. While a 'relational' or SQL-based database would also have worked, MongoDB was chosen because of its frequent pairing and compatibility with both Express and Node.js. This was then ported to MongoDB Atlas, a cloud-based equivalent, easing the transition from a local project to a web-based app. Using Atlas also allowed me to separate my development environment from my production environment, when testing features of the database.",
      "I implemented client-side validations using BootStrap, with 'toast' pop-up notifications to provide user feedback, and added some server-side data validations using <a href='https://mongoosejs.com/docs/guide.html'>Mongoose schemas</a>. For added security, this functionality was extended with the <a href='https://joi.dev/'>joi</a> library, which allowed me to include further server-side validations in the event of any incoming data that bypasses the app's form submission layer, e.g. those made via external API requests.",
      "The course taught me some very useful fundamentals in terms of authenticating a user from scratch, but to simplify the process I used <a href='https://www.passportjs.org/'>Passport.js</a> middleware, which provides pre-defined 'strategies' for authenticating usernames/passwords. This was extended with <a href='https://www.npmjs.com/package/passport-local-mongoose'>passport-local-mongoose</a>, which adds useful methods to the Mongoose data model, while allowing sensitive user data to be stored in secure, encrypted (salted and hashed) form. The end result is a robust and secure registration and login process.",
      "The app includes uploading functionality for multiple images, for which I used <a href='https://www.npmjs.com/package/multer'>Multer</a> middleware to parse the multipart/form-data (used for submitting image files). The images are hosted and accessed via the <a href='https://cloudinary.com/'>Cloudinary API</a> using <a href='https://www.npmjs.com/package/multer-storage-cloudinary'>multer-storage-cloudinary</a>, rather than directly in the database, which would have limited their file size.",
      "<video muted autoplay loop class='demoVid--halfPage'><source src='../images/yelpcamp-clusterInteractive.webm' type='video/webm' /></video>",
      "I used Mapbox's <a href='https://docs.mapbox.com/help/getting-started/geocoding/'>geocoding API</a> to produce GeoJSON coordinates, and the <a href='https://docs.mapbox.com/mapbox-gl-js/guides/'>Mapbox GL JS</a> API for displaying campgrounds on individual maps, as well as a combined cluster map, to which I added customized styling, popup navigation links, and additional controls.",
    ],
    description: "",
    challenges: [
      "Apart from being the most complex and comprehensive app I have worked on to-date, this was my first time working with a 'full-stack' of tech, from front-end layout design, to server-side frameworks like Express, and databases like MongoDB. This naturally taught me a great deal about approaches to troubleshooting and problem-solving.",
      "The interdependence between the many changing parts of a full-stack application, from front-end to back-end, definitely introduces more complexity than with a simpler single-page application. Introducing extra features began to 'break' other parts of the application in unexpected ways.",
      "For example, adding image uploading functionality impacted the back-end validation required for creating new campgrounds - this was dependent on a specific data model, which had now been modified to handle file uploads. The isssue was initially difficult to diagnose, as it returned 'undefined' errors rather than standard validation errors. This really highlighted the importance of testing and debugging at every stage of development, as well as clear error handling. I found that taking a modular approach to app-building made it far easier to isolate the issue to specific files/functions, in tandem with Git version control, which allowed me to identify the specific changes triggering the issue.",
      "As an 'unopinionated' framework, Express is very flexible to work with, but with this naturally comes the potential for undesired issues. Working with middleware required some careful consideration in terms of program flow. Defining my own error-handling middleware was certainly very helpful for logging and debugging, but also chaining these correctly was crucial - at one point, failing to use 'next()' in a simple logger caused a lot of extra problems!",
      "Building an app with a large number of features not only introduces many different options, but adds complexity when bridging the gap between different tech that can achieve similar things. For example, there are many ways to approach validation for form data. After adding both BootStrap validation and JOI server-side validation, there was some conflict - while my front-end markup did not define all fields as 'required', JOI still expected non-empty values, so would throw errors. I therefore had to update my JOI schema to explicitly allow certain empty fields, keeping the two 'in sync.' There were also some complications with review star ratings, whereby a '0' star rating would fail validations, and some extra considerations needed when working with data models that included nested objects.",
      "This was my first time deploying an app to a 'live' production environment outside of GitHub Pages, so I needed to familiarise myself with the <a href='https://www.heroku.com/'>Heroku</a> ecosystem, including how to securely apply environment variables. I also needed to consider the separation between development and production environments, in terms of securely handling 'real' user data, and testing before deployment.",
    ],
    lessons: [
      "The scope of this project was large, and I learned a lot about the many considerations that go into building a full-stack CRUD application.",
      "Overall, the project was a really good exercise in breaking an app down into all of its component parts, while also understanding how they interrelate. I learned how to approach app-building in a modular way - through templating pages, and by creating middleware that can be re-used throughout the app. This avoids duplicating code, and makes things cleaner, easier to read and maintain - really important for projects of any size! One approach taken was using the <a href='https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller'>MVC (Model-View-Controller)</a> design pattern, which taught me how to practically implement a 'separation of concerns' for different parts of the app.",
      "YelpCamp taught me, first-hand, the benefits of using <a href='https://www.educative.io/answers/what-are-restful-routes-in-nodejs'>RESTful routing patterns</a> as a blueprint for the app's CRUD functionality, making the app easier to structure, understand, and ultimately, maintain. This was achieved by linking each user interaction with an associated HTTP verb (e.g. get, post, put, delete), which maps the client-side to an associated server-side function.",
      "In setting up login/register functionality for users, I learned about ways to authenticate users by securely storing their password and other data (with encryption), and using this to confirm their login. I then considered authorization - in addition to requiring a login to access certain content or functions in general, the app would need to apply specific permissions depending on the user, and use server-side security measures to restrict access, as well as hiding content.",
      "To implement this authorization, I needed to make HTTP requests 'stateful' using session and cookie data, which means allowing the app to remember the status of a logged in user and their permissions. This is achieved server-side using session data (with <a href='https://www.npmjs.com/package/express-session'>express-session</a>), and passed to the client for cookie-based authentication. To enable cookie signing and parsing, I used the <a href='https://www.npmjs.com/package/cookie-parser'>cookie-parser</a> middleware.",
      "The project was a great introduction to data models and relationships. In Mongo, I established a link between models for campgrounds, campground authors, reviews and review authors, using referencing that I built into each data 'schema.' This worked very effectively for a 'one to many' data relationship, such as campgrounds and their associated reviews. In future I hope to explore the possibilities of more complex 'two-way referencing,' as well as comparing with an SQL-based approach.",
      "I learned how to effectively 'seed' my database in a testing environment, which I needed to do multiple times throughout development as my app's data structure evolved. I used the <a href='https://unsplash.com/developers'>Unsplash Source API</a> to fetch a series of images from a collection, and populated the rest of the data with randomised location names, descriptors, and geocoding data.",
      "While there is plenty more to expore in this area, the project taught me how to address many security concerns, such as database injections, cross-site scripting, and cookie theft. Methods for addressing this included but were not limited to: 'sanitizing' form inputs to prevent unwanted HTML scripting, protecting cookie data by making it accessible via HTTP only, hiding stack trace errors, encrypting password and user data, setting HTTP response headers and a content security policy for resources (using <a href='https://www.npmjs.com/package/helmet?activeTab=readme'>Helmet</a>), and protecting server-side routes from unwanted or unauthorized requests.",
      "Finally, the scope for improving any app is huge, and there are many potential future considerations - for example, further security concerns, requiring server-side limits image uploads and other app usage, and many potential design/UX improvements.",
    ],
    images: {
      header: "yelpcamp-homepage",
      features: "yelpcamp-login",
      tech: "yelpcamp-clustermap",
      challenges: ["yelpcamp-newcamp",
        "yelpcamp-clusterwide",
        "yelpcamp-edit"]
    },
    otherProjects: {
      schillingerRtm: {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      slidingPuzzle: {
        title: "Sliding Puzzle",
        previewImg: "puzzle-pitch",
        link: "slidingPuzzle",
      },
    },
  },
  schillingerRtm: {
    title: "Schillinger Rhythm Generator",
    stack: ["HTML/CSS", "JavaScript", "p5.js", "p5.sound"],
    code: "https://github.com/JamieBarlow/drum-machine",
    live: "https://jamiebarlow.github.io/drum-machine/",
    about:
      "Interactive web-based sequencer, applying rhythmic theory for creative and educational use.",
    purpose: [
      "Working in collaboration with a composer, teacher and specialist in the Schillinger System of Musical Composition, the aim of this project is to develop an application which can generate rhythms based on a numerical user input. It can serve as a tool for sparking creative inspiration, while teaching key elements of Joseph Schillinger's rhythmic theory, which can have many creative uses for composers and songwriters.",
      "To demonstrate that varied and effective rhythms can be created from almost any series of numbers, the app is designed to take user input in the form of a sequence of digits, which could be entered manually (e.g. 1240652) or come from a less manual/predictable 'in-world' source, such as a barcode. You really can create a rhythm from a can of beans (without needing to hit it)!",
      "User-generated beats are represented in the sequencer, against a consistent 'pulse' rhythm. The interaction between this regular pulse and the irregular (or regular) user-generated pattern is key to the Schillinger rhythm system - the 2 patterns will go in and out of phase, or sync, but return to their original relationship at certain intervals. Schillinger calls these 'interference patterns', referring to the relationship between simultaneous rhythmic patterns. We hear many of these rhythms in nature, and this method is therefore an interesting way of conceptualising it and applying it to musical composition.",
      "<video muted autoplay loop class='demoVid--halfPage'><source src='../images/rhythm-playback.webm' type='video/webm' /></video>",
      "How are the user patterns generated? Each individual number in the sequence defines the length of a beat division and therefore the length of the 'rest' before each subsequent beat - for example: <ul><li>'0' contains no information for beats or rests, and is therefore ignored;</li><li>'1' defines a single beat which is followed immediately by another beat/number;</li><li>'2' defines a beat followed by a rest, taking up 2 beat divisions in total;</li><li>'3' defines a beat followed by a rest of 2 beat divisions, taking up 3 beat divisions in total;</li><li>'4 defines a beat followed by a rest of 3 beat divisions, taking up 4 beat divisions in total;</li><li>etc.</li></ul>",
      "The pattern is translated into a pattern in the app's drum sequencer, an interface which should be familiar to many musicians. This can be edited dynamically by the user to experiment with different patterns, adding or removing beats for each instrument.",
      "Once the pattern has been created, the intention of the app is to allow the musician to alter their in a number of interesting and idea-inspiring ways. Schillinger's 'interference patterns' work with symmetry, so the ability to convert a pattern into a symmetrical one is key for this particular approach, alongside further 'preset' tweaking options:<ul><li>Rotating the pattern;</li><li>A 'regen' option to generate an alternative version of the pattern;</li><li>Changing the instrumentation, i.e. samples;</li><li>Change the character of the pattern - e.g. slow, or offbeat;</li><li>Different musical divisions or time signatures</li></ul>",
    ],
    features: [
      "Drum sequencer - can be used like a regular sequencer. Clicking any cell will add or remove a beat",
      "Numerical input for users - creates a beat against the pulse",
      "Tempo slider for adjusting BPM",
      "User-adjustable pattern length (default is 16 beats, or the total length of the user-input beat if entered)",
      "Regular/irregular pattern selection",
    ],
    webStack: [
      "The app was written in JavaScript, with <a href='https://p5js.org/'>p5.js</a> for drawing the sequencer grid. The goal, working with my client, was to make the app simple and accessible while building out its core features, thereby shortening the production cycle and making this quickly available for testing - therefore, web/browser-based tools were chosen.",
      "For audio, I identified <a href='https://p5js.org/reference/#/libraries/p5.sound'>p5.sound</a> as the most compatible tool, as it extends p5 with <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>Web Audio</a> functionality. Most importantly, it includes useful and flexible methods for handling playback of samples in the form of sequences or patterns.",
    ],
    description: "",
    challenges: [
      "Inconsistent playback speed - for a rhythm-based app this could be quite an issue! By default, the grid-based patterns do not play back 'on beat' but rather slow down or speed up erratically, like a drunken drummer. I therefore needed to pass in a scheduled delay time to produce a clock time that would be consistent with the sample rate, and to add some artificial latency to the playhead so that the speed matches playback.",
      "The <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>Web Audio API</a>, which is used for audio playback in the browser, comes with some restrictions - understandably, auto-playback is restricted and the API therefore expects some form of explicit user interaction in order to allow permission to play audio. In practice, finding a way to consistently 'suspend' audio playback on page load across browsers (and therefore avoid errors) was unexpectedly challenging, but I was able to find a method that mimics Google's autoplay policy.",
      "Working with user-defined pattern/bar lengths, i.e. bar lengths that differ from the input pattern length - the 'interference' between the two is core to what makes Schillinger rhythms interesting, but also makes the app's logic much more complex. The visual sequencer pattern would differ on each 'cycle' and would need to be updated dynamically.",
      "See more development challenges (and solutions) in the <a href='https://github.com/JamieBarlow/drum-machine'>GitHub docs</a>",
    ],
    lessons: [
      "This was a great experience in collaboration, working together to understand the aims and ideas of the client, and communicating with them the technical challenges or steps needed to translate these into functioning code. I set out a plan covering the features that were in scope for the project, and laid out the development stages needed to build a successful app, working through them iteratively.",
      "One key takeaway from this is that there are many ways that a user can 'break' an app or interact with it in unexpected ways, so creating a robust UI/UX that allows for flexible interaction is really important.",
    ],
    images: {
      header: "rhythm-notation",
      features: "rhythm-app",
      tech: "rhythm-type1",
      challenges: ["rhythm-symmetry",
      "rhythm-type2"]
    },
    otherProjects: {
      yelpCamp: {
        title: "YelpCamp",
        previewImg: "yelpcamp-homepage",
        link: "yelpCamp",
      },
      directDebits: {
        title: "Direct Debit Date Calculator",
        previewImg: "dd-calculator",
        link: "directDebits",
      },
    },
  },
  creditCardChecker: {
    title: "Credit Card Checker",
    stack: [],
    code: "",
    live: "",
    about: "",
    purpose: [],
    features: [],
    webStack: [],
    description: "",
    challenges: "",
    lessons: "",
    images: {},
    otherProjects: ["directDebits", "schillingerRtm"],
  },
  salaryCalculator: {
    title: "Take Home Pay / Tax Calculator",
    stack: [],
    code: "",
    live: "",
    about: "",
    purpose: [],
    features: [],
    webStack: [],
    description: "",
    challenges: "",
    lessons: "",
    images: {},
    otherProjects: ["directDebits", "schillingerRtm"],
  },
  pingPongScore: {
    title: "Ping Pong Scorekeeper",
    stack: [],
    code: "",
    live: "",
    about: "",
    purpose: [],
    features: [],
    webStack: [],
    description: "",
    challenges: "",
    lessons: "",
    images: {},
    otherProjects: ["directDebits", "schillingerRtm"],
  },
};

module.exports = projectData;
