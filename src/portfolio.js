import aboutpic from "./components/Access/mePhoto.jpg"
// import logopic from "./components/Access/logoPic.png"

const header = {
  // photo:logopic,
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://brbates86.github.io/dev-portfolio/',
   // title:logopic,
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Brett Russell Bates',
  role: 'Full Stack Developer',
  description:
    'My career started as a carpenter, learning from my dad right out of high school. Over the years, my specialty became rough carpentry, or framing the skeleton of a project. As my family grew, so did my ambition to develop and provide. Thus began my journey to digitize my framing skills. I can confirm carpentry and coding are nothing alike outside of the words framing and skeleton. Today, I am a student digging into the coding and web development bootcamp hosted by the University of Kansas. I am working to become a full-stack developer. My time is also spent leading the worship team at church where I exercise my passion for singing and playing guitar. My weekends often consist of watching the Chiefs and exploring downtown Kansas City with my wife, Claire. My goal is to join a team that encourages new ideas, learning and career growth.',
  resume: 'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:9fcc00f6-1da8-38cd-ae6c-56349fe5477f',
  social: {
    linkedin: 'https://www.linkedin.com/in/brett-russell-bates-3b3a0524a/',
    github: 'https://github.com/brbates86',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WeatherWise',
    description:
      'WeatherWise is an application that utilizes the third-party API, OpenWeather, to retrieve weather data. This app is best used to plan and prepare for vacations and outings.',
    stack: ['localstorage', 'Openweather API', 'Google Map API'],
    sourceCode: 'https://github.com/brbates86/WeatherWise',
    livePreview: 'https://brbates86.github.io/WeatherWise/',
  },
  {
    name: 'The Fount',
    description:
      'This site is hosted on GoDaddy and maintained through Wordpress and CSS. The main function of the website is to provide church members with updates and information for guests.',
    stack: ['wordpress'],
    sourceCode: '',
    livePreview: 'https://thefountkc.com',
  },
  {
    name: 'TechHub',
    description:
      'This is a basic CMS-style blog site that was created using the Model, View, Controller paradigm. This site is currently hosted on Heroku at Heroku Deployment and can also be run locally using the files located in the GitHub repository Github. To learn how to run this server locally please continue reading the Installation and Usage sections.',
    stack: ['Node.js', 'Heroku', 'jawsdb'],
    sourceCode: 'https://github.com/brbates86/Tech-Blog-MVC-Links to an external site.',
    livePreview: 'https://arcane-ravine-15281.herokuapp.com/Links to an external site.',
  },
  {
    name: 'PageQuest',
    description:
      'The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. It is set up to allow users to save book searches to the back end. The application is built using Google Books API search engine build with GraphQL API and Apollo Server.',
    stack: ['MERN', 'React'],
    sourceCode: 'https://github.com/brbates86/PageQuest',
    
  },
  {
    name: 'SecureKey',
    description:
      'SecureKey is a password generator application software tool designed to generate strong and unique passwords that are difficult to crack. It uses various algorithms to create complex and randomized passwords that are typically composed of a mix of uppercase and lowercase letters, numbers, and special characters.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/brbates86/Password-Generator-Project',
    livePreview: 'https://brbates86.github.io/Password-Generator-Project/',
    
  },
  {
    name: 'SchedulePro',
    description:
      'The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. It is set up to allow users to save book searches to the back end. The application is built using Google Books API search engine build with GraphQL API and Apollo Server.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/brbates86/Work-Day-Schedule',
    livePreview: 'https://brbates86.github.io/Work-Day-Schedule/',
    
  },
  {
    name: 'ScreenSurfer',
    description:
      'The ScreenSurfer App is a tool that allows you to keep track of the movies you have watched or plan to watch. With this app, you can easily manage your movie collection, rate movies, and get recommendations based on your preferences.',
    stack: ['React', 'Chakra UI', 'MongoDB', 'Node.js'],
    sourceCode: 'https://github.com/brbates86/ScreenSurfer',
    livePreview: 'https://morning-tundra-56106.herokuapp.com/',
    
  }
]
  


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'Node.js',
  'jquery',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'Git',
  'MERN',
  'Heroku',
  'Adobe Illustrator'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'brettbates86@gmail.com'
}

export { header, about, projects, skills, contact }
