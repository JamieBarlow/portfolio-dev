import Highlight from "../components/ui/annotation/Highlight";
import Underline from "../components/ui/annotation/Underline";
import Box from "../components/ui/annotation/Box";
import Brackets from "../components/ui/annotation/Brackets";
import Circle from "../components/ui/annotation/Circle";
import ResponsiveImg from "../components/ui/ResponsiveImg";
import ResponsiveImages from "../components/ui/ResponsiveImages";
import ResponsiveVideo from "../components/ui/ResponsiveVideo";

interface otherProject {
  title: string;
  previewImg: string;
  link: string;
}

export type projects = project[];

export interface project {
  title: string;
  stack: string[];
  pageLink: string;
  code: string;
  live: string;
  homeDescription: React.ReactNode;
  about: React.ReactNode;
  purpose: React.ReactNode;
  features: React.ReactNode;
  webStack: React.ReactNode;
  challenges: React.ReactNode;
  lessons: React.ReactNode;
  media: {
    header: React.ReactNode;
    features: React.ReactNode;
    tech: React.ReactNode;
    challenges: React.ReactNode;
  };
  otherProjects: otherProject[];
}

const projectData: projects = [
  {
    title: "Direct Debit Processing Calendar",
    stack: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "React-BootStrap",
      "Styled Components",
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
        Single page web application developed for{" "}
        <a href="https://www.cancerresearchuk.org/">Cancer Research UK</a> to
        calculate Direct Debit processing days for a selected year by accounting
        for weekends, bank holidays and other non-work days. Uses the UK
        Government's{" "}
        <Underline>
          <a href="https://www.api.gov.uk/gds/bank-holidays/#bank-holidays">
            Bank Holidays API
          </a>
        </Underline>{" "}
        to fetch data dynamically.
      </p>
    ),
    purpose: (
      <>
        <p>
          This is v2 of a browser app that determines Direct Debit processing
          days for a selected year.
        </p>
        <p>
          Companies using the{" "}
          <a href="https://www.directdebit.co.uk/">Direct Debit scheme</a> rely
          on a processing calendar to schedule these processes accurately,
          accounting for working days, bank holidays, weekends, and office
          closures.
          <p>
            Previously, determining these dates was a manual, complex, and
            error-prone task. This app <Highlight>automates</Highlight> the
            process, reducing potential errors and risks such as missed or
            delayed submissions, payment reconciliation issues, and reputational
            damage from failing to meet terms of the{" "}
            <Underline>
              <a href="https://www.directdebit.co.uk/direct-debit-explained/direct-debit-guarantee/">
                Direct Debit guarantee.
              </a>
            </Underline>
          </p>
          <p>
            The app generates results in a format tailored for the Apps Support
            team, allowing one-click copying to the clipboard and easy data
            loading.
          </p>
        </p>
      </>
    ),
    features: (
      <ul>
        <li>
          Calculates and displays non-processing days (bank holidays and
          weekends) for a given year.
        </li>
        <li>
          Allows users to manually add or delete company-specific non-processing
          days (e.g. office closures), with the results table updating
          dynamically.
        </li>
        <li>
          Displays results in a tabbed UI, with a clean and organized layout.
        </li>
        <li>
          Includes a 'Copy to clipboard' button for easy export of the results
          table.
        </li>
        <li>
          Provides visual feedback for user interactions with 'toast'
          notifications that stack and auto-clear.
        </li>
        <li>
          Features a comprehensive test suite to ensure high reliability and
          near 100% unit test coverage.
        </li>
      </ul>
    ),
    webStack: (
      <>
        <p>
          For the app's core functionality, I used{" "}
          <Highlight color="hl_accent">JavaScript</Highlight>, focusing on the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
            JS Date object
          </a>{" "}
          for accurate date calculations. The app dynamically retrieves dates
          from the UK Government's Bank Holidays API, accommodating changes like
          extra bank holidays.
        </p>
        <p>
          Originally, the app was built with vanilla JS and a basic Bootstrap
          interface, prioritizing functionality over aesthetics. It has since
          undergone a significant <Circle color="ln_lightred">refactor:</Circle>{" "}
          the UI now uses <a href="https://react.dev/">React</a> components,
          including{" "}
          <a href="https://www.npmjs.com/package/@cruk/cruk-react-components">
            CRUK's React component library
          </a>{" "}
          built with{" "}
          <Highlight color="hl_secondary">styled-components</Highlight>.{" "}
          <Highlight color="hl_tertiary">React state management</Highlight>{" "}
          replaced traditional JS DOM manipulation, enabling dynamic updates
          without refreshing the browser, greatly enhancing the user experience.
        </p>
        <p>
          To integrate the original UI elements, I employed{" "}
          <Highlight color="hl_muted">
            <a href="https://react-bootstrap.netlify.app/">React-BootStrap</a>
          </Highlight>{" "}
          for familiar Bootstrap components. The unit tests were updated from
          Mocha/Chai to{" "}
          <Highlight>
            <a href="https://vitest.dev/">Vitest</a>
          </Highlight>
          , benefiting from Vite integration and{" "}
          <Highlight>
            <a href="https://jestjs.io/">Jest API</a>
          </Highlight>{" "}
          compatibility. This setup offers clear assertions, integrated mocking,
          and code coverage visualization.
        </p>
        <p>
          Deployment is handled via{" "}
          <Highlight color="hl_alt">
            <a href="https://www.netlify.com/">Netlify</a>
          </Highlight>
          , streamlining the CI/CD process.
        </p>
        <p>
          You can find the original repo here and see below for a visual
          comparison:
        </p>
      </>
    ),
    challenges: (
      <div>
        <p>
          The app generates results by comparing potential processing dates
          against non-working days from the API (weekends and bank holidays) and
          user-inputted company-specific holidays. If there's a clash, the app
          needs to shift the date and recalculate until no conflicts remain,
          which involved some <Highlight>complex nested loops.</Highlight>
        </p>
        <p>
          Dates in each column are interdependent, and sometimes affected by
          <Highlight>edge cases</Highlight> such as non-processing dates from
          previous or subsequent years, which the app's logic also accounts for.
        </p>
        <p>
          Upgrading to a React application involved refactoring UI elements for
          modularity and dynamic rendering, and restructuring functionality to
          work with React's virtual DOM. This was a challenge but at the same
          time, a great exercise in <Highlight>design thinking</Highlight> -
          analysing the app's process flow, simplifying and breaking down
          functions and UI elements further where necessary, improving clarity
          and reusability.
        </p>
        <p>
          Refactoring was aided by existing unit tests, facilitating a
          <Highlight>test-driven</Highlight> approach. React's modular structure
          helped me to further isolate functions to components themselves,
          rather than as side effects arising from other functions, allowing for
          a clearer separation of concerns. The{" "}
          <Highlight color="hl_tertiary">React Context API</Highlight> provided
          clearer state management.
        </p>
        <p>
          Testing the 'copy to clipboard' function in Vitest involved some extra
          complexity without certain DOM elements in a testing environment. I
          nonetheless managed this by <Highlight>mocking:</Highlight>
        </p>
        <ul>
          <li>The navigator object using 'vi' in Vitest;</li>
          <li>
            The document object using{" "}
            <a href="https://www.npmjs.com/package/jsdom">JSDOM</a>;
          </li>
        </ul>
        <p>
          To ensure consistent output, I standardized the{" "}
          <Highlight>data structure</Highlight>
          returned by functions. This made the app's output more predictable and
          supported debugging through structured tests.
        </p>{" "}
        <p>
          For further details on app-specific challenges, such as handling the
          JavaScript Date object, see my original repo{" "}
          <Underline>
            <a href="https://github.com/JamieBarlow/weekend-bankhol?tab=readme-ov-file#development-challenges-and-lessons-wrench">
              here
            </a>
          </Underline>
          .
        </p>
      </div>
    ),
    lessons: (
      <>
        <p>
          While the app gave me a lot of experience working with the{" "}
          <Highlight>Date object</Highlight> in JavaScript, there are JS date
          libraries which could simplify the process of converting and working
          with dates, thereby speeding up production. For example,{" "}
          <a href="https://date-fns.org/">date-fns</a> or{" "}
          <a href="https://momentjs.com/">Moment.js</a>.
        </p>
        <p>
          While my eventual unit <Highlight>test coverage</Highlight> was close
          to 100%, I learned first-hand that this is not the only metric for
          effective tests - there is always room to improve their quality and
          handling of edge cases. An app can also benefit from{" "}
          <Highlight>integration and end-to-end testing</Highlight> where
          possible. In this case, I mocked integration testing using data to
          ensure the app's output would be correct. I am looking to further
          explore the possibilities of integration and end-to-end testing using
          faking/stubbing tools such as{" "}
          <a href="https://sinonjs.org/">Sinon.js</a>, and E2E testing suites
          such as <a href="https://www.cypress.io/">Cypress</a>, while also
          testing React components with{" "}
          <a href="https://testing-library.com/docs/react-testing-library/intro/">
            React Testing Library
          </a>
          .
        </p>
      </>
    ),
    media: {
      header: (
        <ResponsiveImg
          title="Direct Debits header"
          fileName="dd-calculator-v2.png"
        />
      ),
      features: (
        <ResponsiveImg title="Direct Debits results" fileName="dd-v2-results" />
      ),
      tech: (
        <ResponsiveImg
          title="DD app version comparison"
          fileName="dd-v2-compare"
        />
      ),
      challenges: (
        <ResponsiveImages
          title="Challenges"
          className="challenges-img"
          collection={[
            "dd-v2-company",
            "dd-v2-vitest-dashboard",
            // "dd-v2",
            "dd-v2-vitest-coverage",
          ]}
        />
      ),
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-interface-preview",
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
          , and is built using the MongoDB/Express/Node stack, with{" "}
          <Highlight>RESTful architecture</Highlight> (exposing CRUD
          functionality to users with a uniform interface). The app is styled
          using CSS and BootStrap components.
        </p>
        <p>
          YelpCamp has proved to be a fantastic first-hand learning exercise,
          working with the many fundamental considerations that go into fully
          building and launching a live full-stack application. This includes
          building on core CRUD functionality with a number of extra
          technologies to enhance features like{" "}
          <Highlight>form validation</Highlight>, user{" "}
          <Highlight>authentication</Highlight>,{" "}
          <Highlight>authorization/permissions</Highlight>, and multiple means
          of dealing with common <Highlight>security</Highlight> issues, along
          with additional UI features such as animated review ratings and{" "}
          <Highlight>geocoded</Highlight> cluster maps.
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
          Register / login functionality, with server-side authentication and
          specific authorization for campgrounds linked to a user's id and
          session/cookie data;
        </li>
        <li>
          CRUD (Create, Read, Update/Edit, Destroy) functionality for
          campgrounds and reviews (for logged in users), with data managed in
          MongoDB;
        </li>
        <li>
          Flash success/error messages providing user feedback for login,
          registration, and create/edit/delete actions;
        </li>
        <li>
          Client-side form validation using BootStrap, server-side data
          validation with Express (incl. custom error-handling middleware) and
          JOI;
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
          <Highlight color="hl_accent">
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
        <ResponsiveVideo
          className="demoVid--halfPage"
          fileName="yelpcamp-deleteReview"
        />
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
          To support user <Underline>authentication</Underline>, I used{" "}
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
        <ResponsiveVideo
          className="demoVid--halfPage"
          fileName="yelpcamp-clusterInteractive"
        />
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
    challenges: (
      <>
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
          errors.
        </p>
        <p>
          This really highlighted the importance of{" "}
          <Highlight>testing and debugging</Highlight> at every stage of
          development, as well as clear <Highlight>error handling</Highlight>.
          As an 'unopinionated' framework, Express is very flexible to work
          with, but with this naturally there are more implementation decisions
          to make, and more safeguards needed to avoid issues. Defining my own{" "}
          <Highlight>error-handling middleware</Highlight> was certainly very
          helpful for logging and debugging. I also found that taking a modular
          approach to app-building made it far easier to isolate the issue to
          specific files/functions, in tandem with Git version control, which
          allowed me to identify the changes triggering specific issues.
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
          I learned the importance of app-building in a{" "}
          <Highlight>modular</Highlight> way - whether it be using components or
          page templating, and by creating middleware that can be re-used
          throughout the app. This avoids duplicating code, and makes things
          cleaner, easier to read and maintain - really important for projects
          of any size! I adopted the{" "}
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
          <Highlight>
            <a href="https://www.educative.io/answers/what-are-restful-routes-in-nodejs">
              RESTful routing patterns
            </a>
          </Highlight>{" "}
          as a blueprint for the app's CRUD functionality, making the app easier
          to structure, reason with, and ultimately, maintain. This was achieved
          partly by linking each user interaction with an associated HTTP verb
          (e.g. get, post, put, delete), which maps the client-side to an
          associated server-side function, and through clear and consistent API
          endpoint naming conventions.
        </p>
        <p>
          In setting up login/register functionality for users, I learned about
          ways to <Highlight>authenticate</Highlight> users by securely storing
          their password and other data (with encryption), and using this to
          confirm their login. I then considered authorization - in addition to
          requiring a login to access certain content or functions in general,
          the app would need to apply specific permissions depending on the
          user, and use server-side security measures to restrict access, as
          well as hiding content.
        </p>
        <p>
          To implement this authorization, I needed to make HTTP requests
          'stateful' using session and cookie data, which means allowing the app
          to remember the status of a logged in user and their permissions. This
          is achieved server-side using <Highlight>session data</Highlight>{" "}
          (with{" "}
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
          The project offered great exposure to working with various{" "}
          <Highlight>data models and relationships</Highlight>. In Mongo, I
          established a link between models for campgrounds, campground authors,
          reviews and review authors, using referencing that I built into each
          data 'schema.' This worked very effectively for a 'one to many' data
          relationship, such as campgrounds and their associated reviews. In
          future I hope to explore the possibilities of more complex 'two-way
          referencing,' as well as comparing with an SQL-based approach.
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
    media: {
      header: (
        <ResponsiveImg title="YelpCamp header" fileName="yelpcamp-homepage2" />
      ),
      features: (
        <ResponsiveImg
          title="YelpCamp login page"
          fileName="yelpcamp-loginpage"
        />
      ),
      tech: (
        <ResponsiveImg
          title="YelpCamp edit UI"
          fileName="yelpcamp-campeditgroup"
        />
      ),
      challenges: (
        <ResponsiveImages
          title="Challenges"
          className="challenges-img"
          collection={[
            "yelpcamp-review",
            "yelpcamp-clustermap",
            "yelpcamp-allcamps",
            "yelpcamp-update",
          ]}
        />
      ),
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-interface-preview",
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
          <Highlight>
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
          <Highlight>'interference patterns'</Highlight>, referring to the
          relationship between simultaneous rhythmic patterns. We hear many of
          these rhythms in nature, and this method is therefore an interesting
          way of conceptualising it and applying it to musical composition.
        </p>
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
          quickly available for prototyping and testing - therefore,
          web/browser-based tools were chosen.
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
        <p>
          The UI makes use of web components adapted from the{" "}
          <Highlight color="hl_accent">
            <a href="https://shoelace.style/">Shoelace</a>
          </Highlight>{" "}
          web components library, which I found integrated most effectively in
          practice with the p5 canvas and p5.sound library, both of which affect
          the rendering process. While developing this, I wrote an{" "}
          <a href="https://dev.to/jaybarls/exploring-web-components-and-revisiting-some-js-fundamentals-57e1">
            {" "}
            article
          </a>{" "}
          introducing <Highlight color="hl_accent">
            web components
          </Highlight>{" "}
          and presenting examples covering why they can sometimes offer a highly
          flexible alternative to component-based frameworks.
        </p>
      </>
    ),
    challenges: (
      <>
        <p>
          Inconsistent <Highlight>playback speed</Highlight> - for a
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
          <Underline>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">
              Web Audio API
            </a>
          </Underline>
          , which is used for audio playback in the browser, comes with some{" "}
          <Highlight>policy restrictions</Highlight> - understandably,
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
          some very <Highlight>complex program logic</Highlight>. If the two
          differ, the visual sequencer pattern would also need to update
          dynamically on each 'cycle'. This involves accounting for a number of
          scenarios and <Box color="ln_lightred">design decisions:</Box>
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
          <Highlight>collaboration</Highlight>, working together to understand
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
          really important. This made me think more deeply about the importance
          of <Highlight>usability</Highlight> in any application - making it
          simple and intuitive, while not forcing the user to overthink. There
          are some key principles in Steve Krug's{" "}
          <a href="https://www.amazon.co.uk/Dont-Make-Think-Revisited-Usability/dp/0321965515">
            Don't Make Me Think, Revisited: A Common Sense Approach to Web and
            Mobile Usability
          </a>{" "}
          (strongly recommended!) which I intend to put further into practice in
          future iterations of this app, including:
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
    media: {
      header: (
        <ResponsiveImg
          title="Schillinger Rhythm App header"
          fileName="rhythm-interface-preview"
        />
      ),
      features: (
        <ResponsiveVideo
          className="demoVid--halfPage"
          fileName="rhythm-interaction.webm"
        />
      ),
      tech: <ResponsiveImg title="Type 1 pattern" fileName="rhythm-type1" />,
      challenges: (
        <ResponsiveImages
          title="Challenges"
          className="challenges-img"
          collection={["rhythm-symmetry", "rhythm-type2", "rhythm-notation"]}
        />
      ),
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
    media: {
      header: (
        <ResponsiveImg title="Sliding puzzle header" fileName="puzzle-pitch" />
      ),
      features: (
        <ResponsiveImg
          title="Sliding puzzle shuffled"
          fileName="puzzle-ampersand-shuffled"
        />
      ),
      tech: (
        <ResponsiveImg
          title="Puzzle complete"
          fileName="puzzle-ampersand-complete"
        />
      ),
      challenges: (
        <ResponsiveImages
          title="challenges"
          className="challenges-img"
          collection={["puzzle-ampersand-words", "puzzle-ampersand-promo"]}
        />
      ),
    },
    otherProjects: [
      {
        title: "Schillinger Rhythm Generator",
        previewImg: "rhythm-interface-preview",
        link: "schillingerRtm",
      },
      {
        title: "Direct Debit Date Calculator",
        previewImg: "dd-calculator-v2",
        link: "directDebits",
      },
    ],
  },
  // {
  //   title: "Credit Card Checker",
  //   stack: [],
  //   code: "",
  //   live: "",
  //   about: "",
  //   purpose: [],
  //   features: [],
  //   webStack: [],
  //   description: "",
  //   challenges: "",
  //   lessons: "",
  //   images: {},
  //   otherProjects: ["directDebits", "schillingerRtm"],
  // },
  // {
  //   title: "Take Home Pay / Tax Calculator",
  //   stack: [],
  //   code: "",
  //   live: "",
  //   about: "",
  //   purpose: [],
  //   features: [],
  //   webStack: [],
  //   description: "",
  //   challenges: "",
  //   lessons: "",
  //   images: {},
  //   otherProjects: ["directDebits", "schillingerRtm"],
  // },
  // {
  //   title: "Ping Pong Scorekeeper",
  //   stack: [],
  //   code: "",
  //   live: "",
  //   about: "",
  //   purpose: [],
  //   features: [],
  //   webStack: [],
  //   description: "",
  //   challenges: "",
  //   lessons: "",
  //   images: {},
  //   otherProjects: ["directDebits", "schillingerRtm"],
  // },
];

export default projectData;
