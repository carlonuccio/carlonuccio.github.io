/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Carlo Nuccio",
  title: "Hi all, I'm Carlo",
  subTitle: emoji(
    "A passionate Data Engineer 🚀 having an experience of building data pipelines and data modeling with SQL / Python / dbt / Airflow and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/carlonuccio",
  linkedin: "https://www.linkedin.com/in/carlonuccio/",
  gmail: "carlonuccio91@gmail.com",
  medium: "https://medium.com/@carlonuccio",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Build and manage scalable data pipelines in cloud-based environments (AWS & GCP)"
    ),
    emoji("⚡ Design and implement data warehouse schemas to support analytics and reporting needs"),
    emoji(
      "⚡ Integrate data systems and manage cloud resources required for pipeline execution"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "dbt",
      fontAwesomeClassname: "dbt-className"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "sql-className"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "apache-airflow-className"
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: "bigquery-className"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Palermo",
      logo: require("./assets/images/unipa.jpg"),
      subHeader: "Master of Computer Engineering",
      duration: "September 2015 - October 2017"
    },
    {
      schoolName: "University of Palermo",
      logo: require("./assets/images/unipa.jpg"),
      subHeader: "Bachelor of Computer Engineering",
      duration: "September 2012 - October 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Airflow",
      progressPercentage: "95%"
    },
    {
      Stack: "dbt",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Engineer",
      company: "MotorK",
      companylogo: require("./assets/images/motork.jpeg"),
      date: "Sep 2022 – Present",
      descBullets: [
        "Led the migration of data pipelines to a new ELT data infrastructure (Airbyte, dbt, Airflow on AWS and BigQuery)",
        "Enhanced monitoring, data quality, documentation and reporting infrastructure"
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "Sky",
      companylogo: require("./assets/images/sky.png"),
      date: "Aug 2020 – Aug 2022",
      desc: "Developed e2e ML pipelines and data models using Google Cloud Platform Services (Composer, BigQuery) improving performance, accuracy, monitoring and enhancing decision-making capabilities."
    },
    {
      role: "Big Data Engineer",
      company: "Capgemini Engineering",
      companylogo: require("./assets/images/capgemini.png"),
      date: "Jan 2020 – Jul 2020",
      desc: "Developed data pipelines in Palantir Foundry platform, working with the stakeholders to support their data needs"
    },
    {
      role: "Data Engineer",
      company: "Elmi srl",
      companylogo: require("./assets/images/elmi.png"),
      date: "Sep 2017 – Dec 2019",
      desc: "Designed and implemented robust Extract, Transform, Load (ETL) pipelines to streamline data flow into a data warehouse, implementing Kimball best practices."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "dbt Certified Developer",
      subtitle:
        "Use dbt to apply engineering principles to analytics infrastructure",
      image: require("./assets/icons/dbt.svg"),
      imageAlt: "dbt",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/bf5dd4bc-9987-4a11-a964-bf94df41308f"
        }
      ]
    },
    {
      title: "Google Cloud Certified - Professional Data Engineer",
      subtitle:
        "Design, build, deploy, monitor, maintain, and secure data processing workloads.",
      image: require("https://templates.images.credential.net/16590189412502689960209276019161.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/254d5d39-905a-42d3-82e7-162b8e2626b1#acc.2gFXOHpG"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "carlonuccio91@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
