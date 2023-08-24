const projectData = {
  slidingPuzzle: {
    title: 'Sliding Puzzle',
    stack: ['HTML', 'JavaScript', 'p5.js'],
    code: 'https://github.com/JamieBarlow/sliding-puzzle-p5',
    live: 'https://jamiebarlow.github.io/sliding-puzzle-p5/',
    about:
      'This sliding puzzle was inspired by collaboration with a graphic designer, whose brief was to present a landing page for a healthcare organisation in an eye-catching and educational way. We chose to include a sliding puzzle, as a creative and dynamic way of displaying information, so I opted to build this interactive component for the design.',
    purpose:
      "The puzzle isn't simply there for decoration - it would also allow the client to display a relevant fact under each tile, inspiring curiosity. At the same time, the format is immediately recognisable and intuitive to many users. The aim is to hold the user's interest while they attempt the puzzle, but also to not lock the user out of any key element of the experience, by making this dependent on them finishing the puzzle (which can be surprisingly difficult!) - completion is very much an optional 'bonus' (with a small reward).",
    features: [
      "Flexible design - the puzzle automatically cuts and shuffles any image, without needing to manually create 'tile' assets;",
      'Board length and width can also be defined as needed;',
      "Manual 'reshuffle' button (for testing purposes or as client desires);",
      'Custom randomization factor',
    ],
    webStack:
      'Written in JavaScript, with <a href="https://p5js.org/">p5.js</a> for drawing the canvas.',
    challenges: [
      "Building this as a functioning component was a great logical puzzle in itself. Firstly in terms of tech stack - I had just learned some of the creative applications of JavaScript's <a href='https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'>canvas API</a>, but realised that some additional functionality (such as the visual auto-shuffle on page load) could be achieved more easily and efficiently with the p5.js library, which uses many canvas API features under the hood. This involved some refactoring, but the resulting code was easier to maintain and therefore update, ultimately saving some production time.",
      "I also needed to conceptualise how the puzzle would work with programming logic. This involved creating a fixed 'board' of tiles which could register the position of the user's mouse click, as well as a means of breaking up a source image into tiles, tracked with their own index numbers as they move. When the user clicks a tile, the program would need to find the location of the blank tile, before swapping their positions (the canvas actually 'redraws' on each click).",
      "The toughest challenge was discovered during testing- I learned that in some cases, randomised tile placement meant the puzzle was actually unsolvable. The solution involved reverse-engineering from a completed puzzle, with rules imposed so that each step of the 'shuffle' could only happen if the randomly-selected tile was adjacent to a blank tile, and swapping with it directly. This also required a greater amount of randomization, because there are fewer possibilities for movement on each iteration. As a result I built in a randomization index to quickly test the impact of the number of individual shuffle 'attempts' on the overall level of shuffling, and potentially the difficulty of the puzzle.",
    ],
    lessons: [
      'While some change will be inevitable throughout development and testing, mapping out the design logic further to anticipate issues before writing code could have helped to avoid some rewriting and refactoring.',
      'In future I would also consider where well-chosen libraries can make implementation easier, though the process of learning the canvas API, as I wrote the initial program, was also valuable.',
    ],
    images: ['tile-puzzle-pitch.png'],
    otherProjects: ['schillingerRtm', 'directDebits'],
  },
  directDebits: {
    title: 'Direct Debit Processing Calendar',
    stack: ['HTML/CSS', 'JavaScript', 'BootStrap', 'Mocha.js / Chai.js'],
    code: 'https://github.com/JamieBarlow/weekend-bankhol',
    live: 'https://jamiebarlow.github.io/weekend-bankhol/',
    about:
      'Single page web application deployed by a large-scale organisation to calculate Direct Debit processing days for a selected year by accounting for weekends, bank holidays and other non-work days. Uses the UK Government\'s <a href="https://www.api.gov.uk/gds/bank-holidays/#bank-holidays">Bank Holidays API</a> to fetch data dynamically.',
    purpose:
      'Companies who operate a <a href="https://www.directdebit.co.uk/">Direct Debit scheme</a> will rely on a processing calendar to determine their schedule for specific Direct Debit processes, in order to meet the <a href="https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/">Direct Debit guarantee</a>). Processing dates for both Service User and bank are determined by working days, and therefore need to be adjusted to account for bank holidays, weekends, and office closures. Determining when these dates are had proven to be a manual, surprisingly complex and error-prone process, and so this app was created to meet a real challenge / need for automation. \n\n Ultimately this app is designed to provide a reliable, consistent and maintainable means of determining Direct Debit processing days, mitigating error and risk - failure to generate this data correctly may result in multiple negative impacts that are difficult and/or costly to fix: missed or delayed submissions, payment reconciliation issues, knock-on impact on future claims, damage to reputation or the company\'s Service User status. \n\n The results are laid out in a format that fits the exact requirements of the Apps Support team for data loading, and can be copied to the clipboard with a single click.',
    features: [
      'Calculates and displays non-processing days (bank holidays and weekends) for a given year',
      'User can manually add and display company-specific non-processing days (e.g. Christmas or other holiday office closures)',
      'Displays results as processing dates for the organisation, broken down by type',
      "'Copy to clipboard' button for easy export of results table",
      'Test suite built using <a href="https://www.codecademy.com/article/tdd-u1-good-test">MC-FIRE</a> principles',
    ],
    webStack:
      "JS Date object / Bank Holidays API / BootStrap / Clipboard. \n\n I chose the Chai assertion library, because it can follow a familiar 'assert' style to that provided by Node.js, but is also browser-compatible, so allowed me to display test results from the Mocha framework to end users within the app window itself, along with additional message feedback. \n\n When writing my tests, I made sure to use a '3 test phase' format - Setup, Exercise, and Verify - to make the test code easier to read and maintain. I ran them as isolated unit tests, so didn't include a teardown stage.",
    challenges:
      "Inconsistent playback speed - for a rhythm-based app this could be quite an issue! By default, the grid-based patterns do not play back 'on beat' but rather slow down or speed up erratically, like a drunken drummer. I therefore needed to pass in a scheduled delay time to produce a clock time that would be consistent with the sample rate, and to add some artificial latency to the playhead so that the speed matches playback. \n\n The <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API\">Web Audio API</a>, which is used for audio playback in the browser, comes with some restrictions - understandably, auto-playback is restricted and the API therefore expects some form of explicit user interaction in order to allow permission to play audio. In practice, finding a way to consistently 'suspend' audio playback on page load across browsers (and therefore avoid errors) was unexpectedly challenging, but I was able to find a method that mimics Google's autoplay policy. \n\n Working with user-defined pattern/bar lengths, i.e. bar lengths that differ from the input pattern length - the 'interference' between the two is core to what makes Schillinger rhythms interesting, but also makes the app's logic much more complex. The visual sequencer pattern would differ on each 'cycle' and would need to be updated dynamically. \n\n See more development challenges (and solutions) in the <a href=\"https://github.com/JamieBarlow/drum-machine\">GitHub docs</a>",
    lessons:
      "This was a great experience in collaboration, working together to understand the aims and ideas of the client, and communicating with them the technical challenges or steps needed to translate these into functioning code. I set out a plan covering the features that were in scope for the project, and laid out the development stages needed to build a successful app, working through them iteratively. \n\n One key takeaway from this is that there are many ways that a user can 'break' an app or interact with it in unexpected ways, so creating a robust UI/UX that allows for flexible interaction is really important.",
    images: ['creditcard.jpg'],
    otherProjects: ['slidingPuzzle', 'schillingerRtm'],
  },
  yelpCamp: {
    title: 'YelpCamp',
    stack: [
      'HTML/CSS',
      'JavaScript',
      'BootStrap',
      'ejs',
      'Express',
      'MongoDB',
      'Mongoose',
      'Node.js',
      'Passport.js',
    ],
    code: 'https://github.com/JamieBarlow/myYelpCamp',
    live: '',
    about: 'Full-stack CRUD application based on RESTful routing patterns',
    purpose: '',
    features: [
      'CRUD (create, read, update, delete) functionality for campgrounds and reviews',
      'RESTful backend routing handled in Express',
      'Page templating with EJS',
      'Client-side form validations using BootStrap, server-side validation with Express (incl. custom error-handling middleware) and JOI',
      'Data persistence and relationships managed with MongoDB and Mongoose',
      'User registration and login functions, customised with session/cookie data',
      'User authentication and authorization/access permissions, with Passport.js',
      'Flash messaging feedback for successful user interactions and errors',
      'Image uploading functionality, using Multer middleware to parse multipart/form-data (used for submitting files), and hosting by Cloudinary API',
    ],
    webStack:
      "Used EJS to create page templates, and to interpolate JS for dynamic content and client-side authorization/permissions - for example, showing and hiding the option to leave a review depending on the user's login status, and the option to delete a campground or review only if they are the author of that specific campground/review.",
    description: '',
    challenges:
      "Introducing extra features, such as image uploading functionality, began to 'break' other parts of the application, such as the back-end validation required for creating new campgrounds - this was dependent on a specific data model, which had now been modified to handle file uploads. The isssue was initially difficult to diagnose, as it returned 'undefined' errors rather than standard validation errors. This really highlighted the importance of testing and debugging at every stage of development, as well as clear error handling. I found that taking a modular approach to app-building made it far easier to isolate the issue to specific files/functions, in tandem with Git version control, which allowed me to identify the specific changes triggering the issue.",
    lessons:
      "I learned a lot about the many considerations that go into building a full-stack CRUD application. The project was a really good exercise in breaking an app down into all of its component parts, while seeing how they interrelate. For example, I learned the difference between authentication - registering a user, securely storing their password (with encryption), and confirming their login - and authorization (in addition to requiring a login to access certain content or functions in general, the app also handles specific permissions depending on the user, and applies server-side security measures to restrict this access, as well as hiding content). \n\n I learned about data persistence through the browser session and cookies. \n\n I learned how to approach app-building in a modular way - through templating pages, and creating middleware that can be re-used throughout the app. This avoids duplicating code, and makes things cleaner, easier to read and maintain - really important even for personal projects! One approach taken was using the MVC (Model-View-Controller) design pattern, which taught me how to practically implement a 'separation of concerns' for different parts of the app.",
    images: [],
    otherProjects: ['slidingPuzzle', 'schillingerRtm'],
  },
  schillingerRtm: {
    title: 'Schillinger Rhythm App',
    stack: ['HTML/CSS', 'JavaScript', 'p5.js', 'p5.sound'],
    code: 'https://github.com/JamieBarlow/drum-machine',
    live: 'https://jamiebarlow.github.io/drum-machine/',
    about:
      "Working in collaboration with a composer and specialist in the Schillinger System of Musical Composition, the aim of this project is to develop an application which can generate rhythms based on a numerical user input. It can serve as a tool for sparking creative inspiration, while teaching key elements of Joseph Schillinger's rhythmic theory, which can have many creative uses for composers and songwriters.",
    purpose: '',
    features: [
      'Drum sequencer - can be used like a regular sequencer. Clicking any cell will add or remove a beat',
      'Numerical input for users - creates a beat against the pulse',
      'Tempo slider for adjusting BPM',
      'User-adjustable pattern length (default is 16 beats, or the total length of the user-input beat if entered)',
      'Regular/irregular pattern selection',
    ],
    webStack: '',
    description: '',
    challenges: '',
    lessons: '',
    images: [],
    otherProjects: ['directDebits', 'slidingPuzzle'],
  },
  creditCardChecker: {
    title: 'Credit Card Checker',
    stack: [],
    code: '',
    live: '',
    about: '',
    purpose: '',
    features: [],
    webStack: '',
    description: '',
    challenges: '',
    lessons: '',
    images: [],
    otherProjects: ['directDebits', 'schillingerRtm'],
  },
  salaryCalculator: {
    title: 'Take Home Pay / Tax Calculator',
    stack: [],
    code: '',
    live: '',
    about: '',
    purpose: '',
    features: [],
    webStack: '',
    description: '',
    challenges: '',
    lessons: '',
    images: [],
    otherProjects: ['directDebits', 'schillingerRtm'],
  },
  pingPongScore: {
    title: 'Ping Pong Scorekeeper',
    stack: [],
    code: '',
    live: '',
    about: '',
    purpose: '',
    features: [],
    webStack: '',
    description: '',
    challenges: '',
    lessons: '',
    images: [],
    otherProjects: ['directDebits', 'schillingerRtm'],
  },
};

module.exports = projectData;
