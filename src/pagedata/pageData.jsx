import Highlight from "../components/common/annotation/Highlight";
import Underline from "../components/common/annotation/Underline";
import Box from "../components/common/annotation/Box";
import Brackets from "../components/common/annotation/Brackets";
import Circle from "../components/common/annotation/Circle";

const projectData = [
  {
    title: "Direct Debit Processing Calendar",
    stack: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "React-BootStrap",
      "Vitest / Jest",
    ],
    pageLink: "projects/directDebits",
    code: "https://github.com/JamieBarlow/dd-calculator-v2",
    live: "https://dd-calculator.netlify.app/",
    homeDescription: (
      <p>
        Production app built with React to generate calendar data for Cancer
        Research UK's Direct Debit processes. Unit-tested with Vitest & Jest.
      </p>
    ),
    about: (
      <p>
        <Highlight color="hl_accent">Single page web application</Highlight>{" "}
        developed for{" "}
        <a href="https://www.cancerresearchuk.org/">Cancer Research UK</a> to
        calculate Direct Debit processing days for a selected year by accounting
        for weekends, bank holidays and other non-work days. Uses the UK
        Government's{" "}
        <Box>
          <a href="https://www.api.gov.uk/gds/bank-holidays/#bank-holidays">
            Bank Holidays API
          </a>
        </Box>{" "}
        to fetch data dynamically.
      </p>
    ),
    purpose: (
      <>
        <p>
          This is <Circle color="ln_darkred">v2</Circle> of a browser app that
          can be used to determine Direct Debit processing days for a selected
          year.
        </p>
        <p>
          Companies who operate a{" "}
          <a href="https://www.directdebit.co.uk/">Direct Debit scheme</a> will
          rely on a{" "}
          <Highlight color="hl_secondary">processing calendar</Highlight> to
          determine their schedule for specific Direct Debit processes, in order
          to meet the{" "}
          <a href="https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/">
            Direct Debit guarantee
          </a>
          . Processing dates for both Service User and bank are determined by
          working days, and therefore need to be adjusted to account for{" "}
          <Highlight color="hl_primary">
            bank holidays, weekends, and office closures.
          </Highlight>{" "}
          Determining when these dates are had proven to be a manual,
          surprisingly complex and error-prone process, and so this app was
          created to meet{" "}
          <Underline color="ln_darkred">
            a real challenge / need for automation
          </Underline>
          .
        </p>

        <p>
          Ultimately this app is designed to provide a reliable means of
          determining Direct Debit processing days, mitigating error and risk -
          failure to generate this data correctly may result in multiple
          negative impacts that are difficult and/or costly to fix: missed or
          delayed submissions, payment reconciliation issues, knock-on impact on
          future claims, damage to reputation or the company's Service User
          status.
        </p>
        <p>
          The results are laid out in a format that fits the exact requirements
          of the Apps Support team for data loading, and can be{" "}
          <Highlight color="hl_muted">copied to the clipboard</Highlight> with a
          single click.
        </p>
      </>
    ),
    features: (
      <ul>
        <li>
          Calculates and displays non-processing days (bank holidays and
          weekends) for a given year, using{" "}
          <Highlight color="hl_accent">JavaScript</Highlight> to manage data
          from the UK Bank Holidays API;
        </li>
        <li>
          User can manually add and delete company-specific non-processing days
          (e.g. Christmas or other holiday office closures). The results table
          will update dynamically to account for changes, making use of{" "}
          <Highlight color>React state management;</Highlight>
        </li>
        <li>
          Display built with custom{" "}
          <Highlight color="hl_tertiary">styled-components</Highlight>, with
          results broken down by type in a tabbed{" "}
          <Highlight color="hl_muted">React-BootStrap</Highlight> UI;
        </li>
        <li>'Copy to clipboard' button for easy export of results table;</li>
        <li>
          'Toast' UI notifications for each user interaction, providing visual
          feedback. These stack with repeated actions, and auto-clear after a
          set time interval;
        </li>
        <li>
          <Underline>Test suite</Underline> built using{" "}
          <Highlight color="hl_secondary">
            <a href="https://vitest.dev/">Vitest</a>
          </Highlight>
          , the{" "}
          <Highlight color="hl_tertiary">
            <a href="https://jestjs.io/">Jest</a>
          </Highlight>{" "}
          API for assertions, and{" "}
          <a href="https://www.codecademy.com/article/tdd-u1-good-test">
            MC-FIRE
          </a>{" "}
          testing principles, achieving c.100% unit test coverage;
        </li>
      </ul>
    ),
    webStack: (
      <>
        <p>
          For the app's core logic and functionality, I worked extensively with
          vanilla <Highlight color="hl_accent">JavaScript</Highlight>, focusing
          on the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
            JS Date object
          </a>{" "}
          to make calculations.
        </p>
        <p>
          The app makes calls to the UK Government's Bank Holidays API, which
          ensures that dates can be provided dynamically - for example, when
          extra bank holidays are created.
        </p>
        <p>
          This app was originally built using vanilla JS, with a basic BootStrap
          interface, focusing on functionality over form. It has since undergone
          a major revamp - the UI has been <Underline>refactored</Underline> to
          use{" "}
          <Highlight>
            <a href="https://react.dev/">React</a>
          </Highlight>{" "}
          components (including{" "}
          <a href="https://www.npmjs.com/package/@cruk/cruk-react-components">
            CRUK's React component library
          </a>
          , built using{" "}
          <Highlight color="hl_tertiary">styled-components</Highlight>), and the
          app's functional layer now makes use of React state management instead
          of traditional JS DOM manipulation. This has greatly improved the
          visual interface and provides a robust user experience, allowing for
          results to be updated dynamically without the need to refresh the
          browser.
        </p>
        <p>
          To bridge the gap between the original app's UI elements and React, I
          made use of some of the original BootStrap components, rebuilt for
          React with the{" "}
          <Highlight color="hl_muted">
            <a href="https://react-bootstrap.netlify.app/">React-BootStrap</a>
          </Highlight>{" "}
          library.
        </p>
        <p>
          <Underline>Unit tests</Underline> (originally{" "}
          <Highlight color="hl_accent">Mocha/Chai</Highlight>) have been been
          rewritten in{" "}
          <Highlight color="hl_secondary">
            <a href="https://vitest.dev/">Vitest</a>
          </Highlight>
          , due to its integration with my React build tool of choice,{" "}
          <a href="https://vitejs.dev/">Vite</a>, and compatibility with the
          popular{" "}
          <Highlight color="hl_tertiary">
            <a href="https://jestjs.io/">Jest</a>
          </Highlight>{" "}
          API. Further advantages of this setup included clear assertions,
          integrated mocking, and visualisation of code coverage.
        </p>
        <p>
          For a simplified deployment process and built-in continuous
          integration and continuous deployment(CI/CD), I deployed with{" "}
          <Highlight color="hl_alt">
            <a href="https://www.netlify.com/">Netlify</a>
          </Highlight>
          .
        </p>
        <p>
          You can find the original repo{" "}
          <Circle color="ln_darkred">
            <a href="https://github.com/JamieBarlow/weekend-bankhol">here</a>
          </Circle>
          , and see below for a visual comparison:
        </p>
      </>
    ),
    challenges: (
      <div>
        <p>
          To generate results, the app is comparing potential processing dates
          against the non-working days provided via API call (weekends and bank
          holidays), as well as company-specific holiday dates input by the
          user. If the 2 match, the app needs to not only shift the date
          backwards or forwards, but re-calculate the shift until there is no
          longer a clash. This required some complex nested looping logic, and
          <Highlight color="hl_primary"> testing for edge cases</Highlight>,
          including those where a non-processing day (or days) land(s) between
          dates where one needs to be 3 working days prior to another.
        </p>
        <p>
          The dates calculated in each column are dependent on each other -
          results are not always isolated to a specific calendar year, but can
          be impacted by e.g. non-processing dates in the previous calendar
          year, or can impact the subsequent calendar year. This therefore
          needed to be built into the app's logic as well.
        </p>
        <p>
          Updating from vanilla JS/BootStrap to a fully-fledged React
          application meant not only a <Box color="ln_darkred">refactoring</Box>{" "}
          of UI elements (taking advantage of modular component structure and
          dynamic rendering), but restructuring the app's functionality, as
          React works with a virtual DOM rather than the traditional DOM. This
          was a challenge but at the same time, a great exercise in{" "}
          <Highlight color="hl_secondary">design thinking</Highlight> -
          analysing the app's process flow, simplifying and breaking down
          functions and UI elements further where necessary, improving clarity
          and reusability.
        </p>
        <p>
          Refactoring was helped by having already written{" "}
          <Highlight color="hl_accebt">unit tests</Highlight>, so that I could
          follow a more <Underline>test-driven</Underline> approach. React's
          modular structure helped me to further isolate functions to components
          themselves, rather than as side effects arising from other functions,
          allowing for a clearer separation of concerns. The{" "}
          <Highlight color="hl_muted">
            React{" "}
            <a href="https://react.dev/reference/react/createContext">
              Context API
            </a>
          </Highlight>{" "}
          provided better control and a clearer overview of state management,
          reducing complexity and unwanted side effects.
        </p>
        <Brackets>
          <p>
            <Underline>Testing the 'copy to clipboard' function</Underline> in
            Vitest involved some extra complexity without certain DOM elements
            in a testing environment. I nonetheless managed this by:{" "}
          </p>

          <ul>
            <li>
              <Highlight color="hl_primary">Mocking</Highlight> the navigator
              object using 'vi' in Vitest;
            </li>
            <li>
              Mocking the document object using{" "}
              <a href="https://www.npmjs.com/package/jsdom">JSDOM</a>;
            </li>
          </ul>
        </Brackets>
        <p>
          To make the app's output more predictable, I opted to change the{" "}
          <Highlight color="hl_primary">data structure</Highlight> of each
          function's returned output so that they followed a consistent schema.
          In turn, my tests greatly supported my overall debugging process, as
          they involved checking the data structure as well as type-checking.
        </p>
        <p>
          For some further app-specific challenges, as well as complications and
          lessons from working with the JavaScript Date object, see my original
          repo{" "}
          <Circle color="ln_lightred">
            <a href="https://github.com/JamieBarlow/weekend-bankhol?tab=readme-ov-file#development-challenges-and-lessons-wrench">
              here
            </a>
          </Circle>
          .
        </p>
      </div>
    ),
    lessons: (
      <>
        <p>
          While I gained a lot of experience working with the{" "}
          <Underline>Date object</Underline> in JavaScript, I discovered that
          there are JS date libraries which could simplify the process of
          converting and working with dates, thereby speeding up production. For
          example,{" "}
          <Highlight color="hl_secondary">
            <a href="https://date-fns.org/">date-fns</a>
          </Highlight>{" "}
          or{" "}
          <Highlight color="hl_tertiary">
            <a href="https://momentjs.com/">Moment.js</a>
          </Highlight>
          .
        </p>
        <p>
          While my eventual unit <Underline>test coverage</Underline> was close
          to 100%, I learned first-hand that this is not the only metric for
          effective tests - there is always room to improve their quality and
          handling of edge cases. An app can also benefit from{" "}
          <Highlight color="hl_accent">
            integration and end-to-end testing
          </Highlight>{" "}
          where possible. In this case, I mocked integration testing using data
          to ensure the app's output would be correct. I am looking to further
          explore the possibilities of integration and end-to-end testing using
          faking/stubbing tools such as{" "}
          <Highlight color="hl_alt">
            <a href="https://sinonjs.org/">Sinon.js</a>
          </Highlight>
          , and E2E testing suites such as{" "}
          <Highlight color="hl_secondary">
            <a href="https://www.cypress.io/">Cypress</a>
          </Highlight>
          , while also testing React components with{" "}
          <Highlight color="hl_tertiary">
            <a href="https://testing-library.com/docs/react-testing-library/intro/">
              React Testing Library
            </a>
          </Highlight>
          .
        </p>
      </>
    ),
    images: {
      header: "dd-calculator-v2",
      features: "dd-v2-results",
      tech: "dd-v2-compare",
      challenges: [
        "dd-v2-company",
        "dd-v2-vitest-dashboard",
        // "dd-v2",
        "dd-v2-vitest-coverage",
      ],
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      {
        title: "Sliding Puzzle",
        previewImg: "puzzle-pitch",
        link: "slidingPuzzle",
      },
    ],
  },
  {
    title: "YelpCamp",
    stack: [
      "HTML/CSS",
      "JavaScript",
      "BootStrap",
      "Express",
      "MongoDB",
      "Node.js",
    ],
    pageLink: "projects/yelpCamp",
    code: "https://github.com/JamieBarlow/myYelpCamp",
    live: "https://myyelpcamp-c74110eebe2c.herokuapp.com/",
    homeDescription: (
      <p>
        Full-stack web application for campsite listings and reviews. Features
        authentication/authorization and full CRUD functionality.
      </p>
    ),
    about: (
      <p>Full-stack CRUD application for campsite listings and reviews.</p>
    ),
    purpose: (
      <>
        <p>
          This is a web application allowing the user to create and review
          campgrounds, similar to a review site like Yelp or Tripadvisor.
        </p>
        <p>
          The project forms a major part of Colt Steele's Web Developer Bootcamp
          on Udemy. It features{" "}
          <Highlight color="hl_primary">
            full CRUD (Create, Read, Update, Destroy) functionality
          </Highlight>
          , and is built using the{" "}
          <Highlight color="hl_secondary">MongoDB/Express/Node</Highlight>{" "}
          stack, with <Highlight color="hl_tertiary">RESTful</Highlight>{" "}
          architecture (exposing CRUD functionality to users with a uniform
          interface). The app is styled using CSS and{" "}
          <Highlight color="hl_muted">BootStrap</Highlight> components.
        </p>
        <p>
          YelpCamp has proved to be a fantastic first-hand learning exercise,
          working with the many fundamental considerations that go into fully
          building and launching a live full-stack application. This includes
          building on core CRUD functionality with a number of extra
          technologies to enhance features like{" "}
          <Underline>form validation</Underline>, user{" "}
          <Underline>authentication</Underline>,{" "}
          <Underline>authorization/permissions</Underline>, and multiple means
          of dealing with common <Circle>security</Circle> issues, along with
          additional UI features such as animated review ratings and{" "}
          <Underline>geocoded</Underline> cluster maps.
        </p>
        <p>
          Experience with this app has definitely inspired, and will form the
          foundation for, building future full-stack applications.
        </p>
      </>
    ),
    features: (
      <ul>
        <li>
          <Highlight color="hl_primary">Register / login</Highlight>{" "}
          functionality, with server-side <Underline>authentication</Underline>{" "}
          and specific <Underline>authorization</Underline> for campgrounds
          linked to a user's id and session/cookie data;
        </li>
        <li>
          <Highlight color="hl_accent">CRUD</Highlight> (Create, Read,
          Update/Edit, Destroy) functionality for campgrounds and reviews (for
          logged in users), with data managed in{" "}
          <Highlight color="hl_tertiary">MongoDB</Highlight>;
        </li>
        <li>
          Flash success/error messages providing user feedback for login,
          registration, and create/edit/delete actions;
        </li>
        <li>
          Client-side form <Underline>validation</Underline> using{" "}
          <Highlight color="hl_muted">BootStrap</Highlight>, server-side data
          validation with <Highlight color="hl_secondary">Express</Highlight>{" "}
          (incl. custom error-handling middleware) and JOI;
        </li>
        <li>Multiple image uploading functionality;</li>
        <li>Geocoded cluster map displaying all campgrounds.</li>
      </ul>
    ),
    webStack: (
      <>
        <p>
          This project taught me to use a wide range of tech, building on the
          MongoDB/Express/Node stack with numerous libraries, while also making
          considered choices about the best tools for each task. For some key
          examples:
        </p>
        <p>
          I used{" "}
          <Highlight color="hl_primary">
            <a href="https://ejs.co/">EJS (Embedded JavaScript Templating)</a>
          </Highlight>{" "}
          to create page templates, with consistent 'partial' layout elements
          such as a navbar, footer and error messaging. The library also allowed
          me to embed or interpolate JS for dynamically updated content which
          could be linked to the user-specific{" "}
          <Underline>authorization</Underline>/permissions - for example,
          showing and hiding the option to leave a review depending on the
          user's login status, and the option to delete a campground or review
          only if they are the author of that particular campground or review.
        </p>
        <video muted autoplay loop class="demoVid--halfPage">
          <source
            src="../images/yelpcamp-deleteReview.webm"
            type="video/webm"
          />
        </video>
        <p>
          I used <Highlight color="hl_secondary">Express</Highlight> for
          server-side routing, due to its wide support and flexibility. I was
          able to extend its functionality with libraries such as{" "}
          <a href="https://www.npmjs.com/package/express-session">
            express-session
          </a>
          ,{" "}
          <a href="https://www.npmjs.com/package/connect-flash">
            connect-flash
          </a>
          , <a href="https://www.npmjs.com/package/passport">Passport</a>, and{" "}
          <a href="https://www.npmjs.com/package/express-mongo-sanitize">
            express-mongo-sanitize
          </a>
          , while creating my own <Underline>custom middleware</Underline> for
          general error handling, handling async processes, and validation. This
          helped from a development perspective, while also improving the user
          experience with more useful feedback.
        </p>
        <p>
          Data persistence and relationships were managed with{" "}
          <Highlight color="hl_tertiary">MongoDB</Highlight>, a noSQL database,
          and <Highlight color="hl_tertiary">Mongoose</Highlight>, which extends
          this with the ability to define consistent{" "}
          <Underline>data schemas</Underline>/models. While a 'relational' or
          SQL-based database would also have worked, MongoDB was chosen because
          of its frequent pairing and compatibility with both Express and
          Node.js. This was then ported to MongoDB Atlas, a cloud-based
          equivalent, easing the transition from a local project to a web-based
          app. Using Atlas also allowed me to separate my development
          environment from my production environment, when testing features of
          the database.
        </p>
        <p>
          I implemented <Underline>client-side validation</Underline> using{" "}
          <Highlight color="hl_muted">BootStrap</Highlight>, with 'toast' pop-up
          notifications to provide user feedback, and added some server-side
          data validations using{" "}
          <a href="https://mongoosejs.com/docs/guide.html">Mongoose schemas</a>.
          For added security, this functionality was extended with the{" "}
          <Highlight color="hl_alt">
            <a href="https://joi.dev/">joi</a> library
          </Highlight>
          , which allowed me to include further{" "}
          <Underline>server-side validation</Underline> in the event of any
          incoming data that bypasses the app's form submission layer, e.g.
          those made via external API requests.
        </p>
        <p>
          The course taught me some very useful fundamentals in terms of{" "}
          <Underline>authenticating</Underline> a user from scratch, but to
          simplify the process I used{" "}
          <Highlight>
            <a href="https://www.passportjs.org/">Passport.js</a>
          </Highlight>{" "}
          middleware, which provides pre-defined 'strategies' for authenticating
          usernames/passwords. This was extended with{" "}
          <a href="https://www.npmjs.com/package/passport-local-mongoose">
            passport-local-mongoose
          </a>
          , which adds useful methods to the Mongoose data model, while allowing
          sensitive user data to be stored in secure, encrypted (salted and
          hashed) form. The end result is a robust and secure registration and
          login process.
        </p>
        <p>
          The app includes uploading functionality for multiple images, for
          which I used{" "}
          <Highlight color="hl_tertiary">
            <a href="https://www.npmjs.com/package/multer">Multer</a>
          </Highlight>{" "}
          middleware to parse the multipart/form-data (used for submitting image
          files). The images are hosted and accessed dynamically via the{" "}
          <Highlight color="hl_secondary">
            <a href="https://cloudinary.com/">Cloudinary API</a>
          </Highlight>{" "}
          using{" "}
          <a href="https://www.npmjs.com/package/multer-storage-cloudinary">
            multer-storage-cloudinary
          </a>
          , rather than directly in the database, which would have limited their
          file size.
        </p>
        <video muted autoplay loop class="demoVid--halfPage">
          <source
            src="../images/yelpcamp-clusterInteractive.webm"
            type="video/webm"
          />
        </video>
        <p>
          I used Mapbox's{" "}
          <a href="https://docs.mapbox.com/help/getting-started/geocoding/">
            <Underline>geocoding</Underline> API
          </a>{" "}
          to produce GeoJSON coordinates, and the{" "}
          <Highlight>
            <a href="https://docs.mapbox.com/mapbox-gl-js/guides/">
              Mapbox GL JS
            </a>
          </Highlight>{" "}
          API for displaying campgrounds on individual maps, as well as a
          combined cluster map, to which I added customized styling, popup
          navigation links, and additional controls.
        </p>
      </>
    ),
    description: "",
    challenges: (
      <>
        <p>
          Apart from being the most complex and comprehensive app I have worked
          on to-date, this was my first time working with a 'full-stack' of
          tech, from front-end layout design, to server-side frameworks like
          Express, and databases like MongoDB. This naturally taught me a great
          deal about approaches to troubleshooting and problem-solving.
        </p>
        <p>
          The{" "}
          <Highlight>
            interdependence between the many changing parts of a full-stack
            application
          </Highlight>
          , from front-end to back-end, definitely introduces more complexity
          than with a simpler single-page application. Introducing extra
          features began to 'break' other parts of the application in unexpected
          ways.
        </p>
        <p>
          For example, adding image uploading functionality impacted the
          back-end validation required for creating new campgrounds - this was
          dependent on a specific data model, which had now been modified to
          handle file uploads. The isssue was initially difficult to diagnose,
          as it returned 'undefined' errors rather than standard validation
          errors. This really highlighted the importance of{" "}
          <Highlight color="hl_accent">testing and debugging</Highlight> at
          every stage of development, as well as clear error handling. I found
          that taking a modular approach to app-building made it far easier to
          isolate the issue to specific files/functions, in tandem with Git
          version control, which allowed me to identify the specific changes
          triggering the issue.
        </p>
        <p>
          As an 'unopinionated' framework, Express is very flexible to work
          with, but with this naturally comes the potential for undesired
          issues. Working with middleware required some careful consideration in
          terms of program flow. Defining my own{" "}
          <Highlight color="hl_secondary">error-handling middleware</Highlight>{" "}
          was certainly very helpful for logging and debugging, but also
          chaining these correctly was crucial - at one point, failing to use
          'next()' in a simple logger caused a lot of extra problems!
        </p>
        <p>
          Building an app with a large number of features not only introduces
          many different options, but adds complexity when bridging the gap
          between different tech that can achieve similar things. For example,
          there are <Highlight>many ways to approach data validation</Highlight>
          . After adding both BootStrap validation and JOI server-side
          validation, there was some conflict - while my front-end markup did
          not define all fields as 'required', JOI still expected non-empty
          values, so would throw errors. I therefore had to update my JOI schema
          to explicitly allow certain empty fields, keeping the two 'in sync.'
          There were also some complications with review star ratings, whereby a
          '0' star rating would fail validations, and some extra considerations
          needed when working with data models that included nested objects.
        </p>
        <p>
          This was my first time deploying an app to a 'live' production
          environment outside of GitHub Pages, so I needed to familiarise myself
          with the{" "}
          <Highlight color="hl_tertiary">
            <a href="https://www.heroku.com/">Heroku</a>
          </Highlight>{" "}
          ecosystem, including how to securely apply environment variables. I
          also needed to consider the{" "}
          <Highlight>
            separation between development and production environments
          </Highlight>
          , in terms of securely handling 'real' user data, and testing before
          deployment.
        </p>
      </>
    ),
    lessons: (
      <>
        <p>
          The scope of this project was large, and I learned a lot about the
          many considerations that go into building a full-stack CRUD
          application.
        </p>
        <p>
          Overall, the project was a really good exercise in breaking an app
          down into all of its component parts, while also understanding how
          they interrelate. I learned how to approach app-building in a{" "}
          <Highlight>modular</Highlight> way - through templating pages, and by
          creating middleware that can be re-used throughout the app. This
          avoids duplicating code, and makes things cleaner, easier to read and
          maintain - really important for projects of any size! One approach
          taken was using the{" "}
          <Highlight>
            <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">
              MVC (Model-View-Controller)
            </a>
          </Highlight>{" "}
          design pattern, which taught me how to practically implement a
          'separation of concerns' for different parts of the app.
        </p>
        <p>
          YelpCamp taught me, first-hand, the benefits of using{" "}
          <Highlight color="hl_secondary">
            <a href="https://www.educative.io/answers/what-are-restful-routes-in-nodejs">
              RESTful routing patterns
            </a>
          </Highlight>{" "}
          as a blueprint for the app's CRUD functionality, making the app easier
          to structure, understand, and ultimately, maintain. This was achieved
          by linking each user interaction with an associated HTTP verb (e.g.
          get, post, put, delete), which maps the client-side to an associated
          server-side function.
        </p>
        <p>
          In setting up login/register functionality for users, I learned about
          ways to authenticate users by securely storing their password and
          other data (with encryption), and using this to confirm their login. I
          then considered authorization - in addition to requiring a login to
          access certain content or functions in general, the app would need to
          apply specific permissions depending on the user, and use server-side
          security measures to restrict access, as well as hiding content.
        </p>
        <p>
          To implement this authorization, I needed to make HTTP requests
          'stateful' using session and cookie data, which means allowing the app
          to remember the status of a logged in user and their permissions. This
          is achieved server-side using{" "}
          <Highlight color="hl_tertiary">session data</Highlight> (with{" "}
          <a href="https://www.npmjs.com/package/express-session">
            express-session
          </a>
          ), and passed to the client for cookie-based authentication. To enable
          cookie signing and parsing, I used the{" "}
          <a href="https://www.npmjs.com/package/cookie-parser">
            cookie-parser
          </a>{" "}
          middleware.
        </p>
        <p>
          The project was a great introduction to{" "}
          <Highlight color="hl_alt">data models and relationships</Highlight>.
          In Mongo, I established a link between models for campgrounds,
          campground authors, reviews and review authors, using referencing that
          I built into each data 'schema.' This worked very effectively for a
          'one to many' data relationship, such as campgrounds and their
          associated reviews. In future I hope to explore the possibilities of
          more complex 'two-way referencing,' as well as comparing with an
          SQL-based approach.
        </p>
        <p>
          I learned how to effectively <Highlight>'seed' my database</Highlight>{" "}
          in a testing environment, which I needed to do multiple times
          throughout development as my app's data structure evolved. I used the{" "}
          <a href="https://unsplash.com/developers">Unsplash Source API</a> to
          fetch a series of images from a collection, and populated the rest of
          the data with randomised location names, descriptors, and geocoding
          data.
        </p>
        <p>
          While there is plenty more to expore in this area, the project taught
          me how to address many <Circle color="ln_lightred">security</Circle>{" "}
          concerns, such as database injections, cross-site scripting, and
          cookie theft. Methods for addressing this included but were not
          limited to: 'sanitizing' form inputs to prevent unwanted HTML
          scripting, protecting cookie data by making it accessible via HTTP
          only, hiding stack trace errors, encrypting password and user data,
          setting HTTP response headers and a content security policy for
          resources (using{" "}
          <a href="https://www.npmjs.com/package/helmet?activeTab=readme">
            Helmet
          </a>
          ), and protecting server-side routes from unwanted or unauthorized
          requests.
        </p>
        <p>
          Finally, the scope for improving any app is huge, and there are many
          potential future considerations - for example, further security
          concerns, requiring server-side limits image uploads and other app
          usage, and many potential design/UX improvements.
        </p>
      </>
    ),
    images: {
      header: "yelpcamp-homepage2",
      features: "yelpcamp-loginpage",
      tech: "yelpcamp-campeditgroup",
      challenges: [
        "yelpcamp-review",
        "yelpcamp-clustermap",
        "yelpcamp-allcamps",
        "yelpcamp-update",
      ],
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      {
        title: "Sliding Puzzle",
        previewImg: "puzzle-pitch",
        link: "slidingPuzzle",
      },
    ],
  },
  {
    title: "Schillinger Rhythm Generator",
    stack: [
      "HTML/CSS",
      "JavaScript",
      "p5.js",
      "p5.sound",
      "Web components",
      "Shoelace",
    ],
    pageLink: "projects/schillingerRtm",
    code: "https://github.com/JamieBarlow/schillinger-rhythm",
    live: "https://jamiebarlow.github.io/schillinger-rhythm/",
    homeDescription: (
      <p>
        Web app to generate complex rhythms from user input, as a compositional
        tool and interactive education in rhythmic theory.
      </p>
    ),
    about: (
      <p>
        Interactive web-based audio sequencer, applying rhythmic theory for
        creative and educational use.
      </p>
    ),
    purpose: (
      <div>
        <p>
          Working in collaboration with a composer, teacher and specialist in
          the{" "}
          <Highlight color="hl_accent">
            <a href="https://en.wikipedia.org/wiki/Schillinger_System">
              Schillinger System
            </a>{" "}
            of Musical Composition
          </Highlight>
          , the aim of this project is to develop an application which can
          generate rhythms based on a numerical user input. It can serve as a
          tool for sparking creative inspiration, while teaching key elements of
          Joseph Schillinger's rhythmic theory, which can have many creative
          uses for composers and songwriters.
        </p>
        <p>
          To demonstrate that varied and effective rhythms can be created
          mathematically from almost any{" "}
          <Highlight>numerical pattern,</Highlight> the app is designed to take
          user input in the form of a sequence of digits, which could be entered
          manually (e.g. 1240652) or come from a less manual/predictable
          'in-world' source, such as a barcode. You really can create a rhythm
          from a can of beans (without needing to hit it)!
        </p>
        <p>
          User-generated beats are represented in the sequencer, against a
          consistent 'pulse' rhythm. The interaction between this regular pulse
          and the irregular (or regular) user-generated pattern is key to the
          Schillinger rhythm system - the 2 patterns will go in and out of
          phase, or sync, but return to their original relationship at certain
          intervals. Schillinger calls these{" "}
          <Highlight color="hl_secondary">'interference patterns'</Highlight>,
          referring to the relationship between simultaneous rhythmic patterns.
          We hear many of these rhythms in nature, and this method is therefore
          an interesting way of conceptualising it and applying it to musical
          composition.
        </p>
        <video muted autoplay loop class="demoVid--halfPage">
          <source src="../images/rhythm-playback.webm" type="video/webm" />
        </video>{" "}
        <p>
          How are the numerical patterns generated? Each individual number in
          the sequence defines the 'length' of a beat - for example:
        </p>
        <ul>
          <li>
            '0' contains no information for beats or rests, and is therefore
            ignored;
          </li>
          <li>
            '1' defines a single beat which is followed immediately by another
            beat/number;
          </li>
          <li>
            '2' defines a beat followed by a rest, taking up 2 beat divisions in
            total;
          </li>
          <li>
            '3' defines a beat followed by a rest of 2 beat divisions, taking up
            3 beat divisions in total;
          </li>
          <li>
            '4 defines a beat followed by a rest of 3 beat divisions, taking up
            4 beat divisions in total;
          </li>
          <li>etc.</li>
        </ul>
        <p>
          The numerical pattern is translated into a pattern in the app's drum
          sequencer, an interface which should be immediately familiar to many
          musicians. This can then be edited dynamically by the user to
          experiment with different patterns, adding or removing beats for each
          instrument/sample.
        </p>
        <p>
          Once the pattern has been created, the app will ultimately allow the
          musician to alter it in a number of interesting and idea-inspiring
          ways, or <Highlight>'mutations'</Highlight> (to be added).
          Schillinger's 'interference patterns' work with symmetry, so the
          ability to convert a pattern into a symmetrical one will be a key
          feature, alongside further 'preset' tweaking options:
        </p>
        <ul>
          <li>Rotating the pattern;</li>
          <li>
            A 'regen' option to generate an alternative version of the pattern;
          </li>
          <li>Changing the instrumentation, i.e. samples;</li>
          <li>Change the character of the pattern - e.g. slow, or offbeat;</li>
          <li>Different musical divisions or time signatures</li>
        </ul>
      </div>
    ),
    features: (
      <ul>
        <li>
          Drum sequencer - can be used like a regular sequencer. Clicking any
          cell will add or remove a beat;
        </li>
        <li>Numerical input for users - creates a beat against the pulse;</li>
        <li>Tempo slider for adjusting BPM;</li>
        <li>
          User-adjustable pattern length (default is 16 beats, or the total
          length of the user-input beat if entered)
        </li>
        <li>Regular/irregular pattern selection</li>
      </ul>
    ),
    webStack: (
      <>
        <p>
          The app was written in{" "}
          <Highlight>
            JavaScript with <a href="https://p5js.org/">p5.js</a>
          </Highlight>{" "}
          for drawing the sequencer grid. The goal, working with my client, was
          to make the app simple and accessible while building out its core
          features, thereby shortening the production cycle and making this
          quickly available for testing - therefore, web/browser-based tools
          were chosen.
        </p>
        <p>
          For audio, I identified{" "}
          <Highlight color="hl_secondary">
            <a href="https://p5js.org/reference/#/libraries/p5.sound">
              p5.sound
            </a>
          </Highlight>{" "}
          as the most compatible tool, as it extends p5 with{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">
            Web Audio
          </a>{" "}
          functionality. Most importantly, it includes useful and flexible
          methods for handling playback of samples in the form of sequences or
          patterns.
        </p>
      </>
    ),
    description: "",
    challenges: (
      <>
        <p>
          Inconsistent <Underline>playback speed</Underline> - for a
          rhythm-based app this could be quite an issue! By default, the
          grid-based patterns do not play back 'on beat' but rather slow down or
          speed up erratically, like a drunken drummer. I therefore needed to
          pass in a scheduled delay time to produce a clock time that would be
          consistent with the sample rate. I also added some artificial latency
          to the visual playhead so that this was in sync with the speed of
          audio playback.
        </p>
        <p>
          The{" "}
          <Highlight>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">
              Web Audio API
            </a>
          </Highlight>
          , which is used for audio playback in the browser, comes with some{" "}
          <Underline>policy restrictions</Underline> - understandably,
          auto-playback is restricted and the API therefore expects some form of
          explicit user interaction in order to allow permission to play audio.
          In practice, finding a way to consistently 'suspend' audio playback on
          page load across browsers (and therefore avoid error which break the
          app) was unexpectedly challenging, but I was able to find a method
          that mimics Google's autoplay policy.
        </p>
        {/* <p>
          Clicking cells in the sequencer grid allows the user to update the
          pattern as the sequence plays. I therefore needed my app to
          dynamically update both the visual grid and the sound sequence,
          without interrupting playback by 'refreshing' the browser.
        </p> */}
        <p>
          Working with patterns of differing lengths (i.e. a user-defined
          sequence length which is longer or shorter than the length of the
          numerical input pattern) - the 'interference' between the two is core
          to what makes Schillinger rhythms interesting, but also introduces
          some very <Underline>complex logic</Underline>. If the two differ, the
          visual sequencer pattern would also need to update dynamically on each
          'cycle'. This involves accounting for a number of scenarios and{" "}
          <Box color="ln_lightred">design decisions:</Box>
        </p>
        <ul>
          <li>
            If the sequence length is set to be <em>longer</em> than the input
            pattern, the pattern itself needs to cycle within the longer
            sequence, while the sequence display needs to update on each cycle
            of the playhead. A simpler alternative would have been to add rests
            to the pattern to 'fill' the remainder of the sequence, so that the
            same pattern repeats on each cycle - but this is far less
            interesting and doesn't take full advantage of the variation in
            'interference patterns'.
          </li>
          <li>
            If the sequence length is set to be <em>shorter</em> than the
            original input pattern, the sequence on display needs to be
            'refreshed' more frequently. A simpler alternative would be to
            truncate the pattern, but again this limits variation.
          </li>
          <li>
            If the sequence length is <em>much longer</em> than the input
            pattern, this requires multiple cycles within a sequence, adding
            further complexity.
          </li>
        </ul>
        <p>
          For more detail, and to see more development challenges (and
          solutions), see the{" "}
          <a href="https://github.com/JamieBarlow/drum-machine">GitHub docs</a>.
        </p>
      </>
    ),
    lessons: (
      <>
        <p>
          This has been a great experience in{" "}
          <Underline>collaboration</Underline>, working together to understand
          the aims and ideas of the client, and communicating with them the
          technical challenges or steps needed to translate these into
          functioning code. I set out a plan covering the features that were in
          scope for the project, and laid out the development stages needed to
          build a successful app, working through them iteratively.
        </p>
        <p>
          One key takeaway from this project has been that there are many ways
          that a user can 'break' an app or interact with it in unexpected ways,
          so creating a robust UI/UX that allows for flexible interaction is
          really important. This made me think about the importance of{" "}
          <Underline>usability</Underline> in any application - making it simple
          and intuitive, while not forcing the user to overthink. There are some
          key principles in Steve Krug's{" "}
          <a href="https://www.amazon.co.uk/Dont-Make-Think-Revisited-Usability/dp/0321965515">
            Don't Make Me Think, Revisited: A Common Sense Approach to Web and
            Mobile Usability
          </a>{" "}
          (strongly recommended!) which I intend to implement in future
          iterations of this app, including:
        </p>{" "}
        <ul>
          <li>
            Don't make the user think - use of the app should be self-evident
            and a new user should be able to explore it intuitively, without
            friction or confusion.
          </li>
          <li>
            Avoid instructions, or keep them short and simple. I have initially
            kept detailed instructions on the app's front page for ease of
            development and demonstration, but these will be replaced with UI
            features and a clearer visual hierarchy to highlight the app's most
            important features.
          </li>
          <li>
            Regular usability testing - this helps to challenge development
            assumptions when used in the 'real world,' and continuous testing
            allows for continuous improvement.
          </li>
        </ul>
      </>
    ),
    images: {
      header: "rhythm-browser",
      features: "rhythm-app",
      tech: "rhythm-type1",
      challenges: ["rhythm-symmetry", "rhythm-type2", "rhythm-notation"],
    },
    otherProjects: [
      {
        title: "YelpCamp",
        previewImg: "yelpcamp-homepage2",
        link: "yelpCamp",
      },
      {
        title: "Direct Debit Date Calculator",
        previewImg: "dd-calculator-v2",
        link: "directDebits",
      },
    ],
  },
  {
    title: "Sliding Puzzle",
    stack: ["HTML", "JavaScript", "p5.js"],
    pageLink: "projects/slidingPuzzle",
    code: "https://github.com/JamieBarlow/sliding-puzzle-p5",
    live: "https://jamiebarlow.github.io/sliding-puzzle-p5/",
    homeDescription: (
      <p>
        Interactive puzzle feature for a healthcare organisation's landing page
      </p>
    ),
    about: (
      <p>
        This sliding puzzle was inspired by collaboration with a graphic
        designer, whose brief was to present a landing page for a healthcare
        organisation in an eye-catching and educational way. We chose to include
        a sliding puzzle, as a creative and dynamic way of displaying
        information, so I opted to build this interactive component for the
        design.
      </p>
    ),
    purpose: (
      <p>
        The puzzle isn't simply there for decoration - it would also allow the
        client to display a relevant fact under each tile, inspiring curiosity.
        At the same time, the format is immediately recognisable and intuitive
        to many users. The aim is to hold the user's interest while they attempt
        the puzzle, but also to not lock the user out of any key element of the
        experience, by making this dependent on them finishing the puzzle (which
        can be surprisingly difficult!) - completion is very much an optional
        'bonus' (with a small reward).
      </p>
    ),
    features: (
      <ul>
        <li>
          Flexible design - the puzzle automatically cuts and shuffles any
          image, without needing to manually create 'tile' assets;
        </li>
        <li>Board length and width can also be defined as needed;</li>
        <li>
          Manual 'reshuffle' button (for testing purposes or as client desires);
        </li>
        <li>Custom randomization factor</li>
      </ul>
    ),
    webStack: (
      <>
        <p>
          Written in JavaScript, with <a href="https://p5js.org/">p5.js</a> for
          drawing the canvas. When beginning production of the app, I had just
          learned some of the creative applications of JavaScript's{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
            canvas API
          </a>
          , but realised that some additional functionality (such as the visual
          auto-shuffle on page load) could be achieved more easily and
          efficiently with the p5.js library, which uses many canvas API
          features under the hood. This involved some refactoring, but the
          resulting code was easier to maintain and therefore update, ultimately
          saving some production time.
        </p>
      </>
    ),
    challenges: (
      <>
        <p>
          Sliding puzzles are familiar, but conceptualising how the puzzle could
          be built with programming logic, proved to be a puzzle in itself. My
          solution involved creating a fixed 'board' of tiles which could
          register the position of the user's mouse click, as well as a means of
          breaking up a source image into tiles, tracked with their own index
          numbers as they move. When the user clicks a tile, the program would
          need to find the location of the blank tile, before swapping their
          positions (the canvas actually 'redraws' on each click).
        </p>
        <p>
          The toughest challenge was discovered during testing- I learned that
          in some cases, randomised tile placement meant the puzzle was actually
          unsolvable. The solution involved reverse-engineering from a completed
          puzzle, with rules imposed so that each step of the 'shuffle' could
          only happen if the randomly-selected tile was adjacent to a blank
          tile, and swapping with it directly. This also required a greater
          amount of randomization, because there are fewer possibilities for
          movement on each iteration. As a result I built in a randomization
          index to quickly test the impact of the number of individual shuffle
          'attempts' on the overall level of shuffling, and potentially the
          difficulty of the puzzle.
        </p>
      </>
    ),
    lessons: (
      <>
        <p>
          While some change will be inevitable throughout development and
          testing, mapping out the design logic further to anticipate issues
          before writing code could have helped to avoid some rewriting and
          refactoring.
        </p>
        <p>
          In future I would also consider where well-chosen libraries can make
          implementation easier, though the process of learning the canvas API,
          as I wrote the initial program, was also valuable.
        </p>
      </>
    ),
    images: {
      header: "puzzle-pitch",
      features: "puzzle-ampersand-shuffled",
      tech: "puzzle-ampersand-complete",
      challenges: ["puzzle-ampersand-words", "puzzle-ampersand-promo"],
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-app",
        link: "schillingerRtm",
      },
      {
        title: "Direct Debit Date Calculator",
        previewImg: "dd-calculator-v2",
        link: "directDebits",
      },
    ],
  },
  {
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
  {
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
  {
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
];

export default projectData;
