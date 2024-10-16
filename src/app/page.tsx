import { Project, ViewAllProjects } from './components/project';
import { Job } from './components/job';

export default function HomePage() {
  return (
    <main>
      <div className="about-me">
        <h1 className="text-3xl mb-2">Tyler Mong</h1>
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
            <p className="text-sm">New Jersey, USA</p>
          </div>
          <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
            <p className="inline-flex">ITS Help Desk Technician @ Stockton University</p>
          </div>
          <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
            <p className="inline-flex">Computer Science @ Stockton University</p>
          </div>
        </div>
        <p className="mb-10 text-justify">I&#39;m a 20-year-old computer science student who loves building things and tackling complex problems.
          When I&#39;m not coding, you can find me at the gym, experimenting with photography, or at car meets.
          My curisoty keeps me constantly exploring new technologies and ways to improve my skills.
        </p>
      </div>

      <div className="projects mb-10">
        <h2 className="text-2xl mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <Project
            title="HackrMap"
            link="https://www.hackrmap.com/"
            role="Full-Stack Developer"
            description="An AI-powered tool designed to create a detailed hackathon project roadmap. Enter information such as the project goals, number of teammates, and individual skill levels, and HackrMap will generate a roadmap for your project, including a timeline, task list, learning resources, and more."
          />
          <Project
            title="The Pack"
            link="https://github.com/tylermong/The-Pack"
            role="Project Manager, Full-Stack Dev, DB Admin"
            description="An all-in-one fitness platform built for The Pack SSC, located in Galloway, NJ. Features include workout and nutrition tracking, in-app messaging, appointment and class scheduling, and more."
          />
          <Project
            title="KeyKeeper"
            link="https://github.com/tylermong/KeyKeeper"
            role="Full-Stack Developer"
            description="A secure password manager that allows users to safely store and retrieve their credentials, featuring easy access and an intuitive interface for managing sensitive information."
          />
          <Project
            title="C++ Memory Manipulation Suite"
            link="https://github.com/tylermong/CPP-Memory-Manipulation-Suite"
            role="Command-Line Application Developer"
            description="A collection of C++ applications designed for practicing memory reading and writing techniques, offering hands-on experience with pointers and memory management concepts."
          />
          <Project
            title="C++ Memory Manipulation Suite"
            link="https://github.com/tylermong/Astro"
            role="Front-End Developer"
            description="A full-featured social media platform that allows users to share posts, comment on shared content, send direct messages, and customize their profiles, creating a dynamic and engaging community experience."
          />
          <ViewAllProjects/>
        </div>
      </div>

      <div className="work mb-10">
        <h2 className="text-2xl mb-2">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-y-6">
          <Job
            position="ITS Help Desk Technician"
            company="Stockton University&nbsp;"
            location="• Galloway, NJ"
            summary="Provide technical support and assistance to end-users via phone, email, and in person, including diagnosing and resolving IT issues related to hardware, software, and networking."
            responsibilities={[
              "Manage and document over 1,000 support requests, including troubleshooting steps and resolutions, utilizing tools like Active Directory, IMS, Confluence, WinPE, and Macrium Reflect.",
              "Install, configure, and maintain computer systems, peripherals, and software applications, while backing up and duplicating data using NAS and RClone.",
              "Collaborate with ITS members to resolve complex technical issues and contribute to the development of IT policies and user training.",
            ]}
          />
          <Job
            position="Information Technology Assistant"
            company="Atlantic County Institute of Technology&nbsp;"
            location="• Mays Landing, NJ"
            summary="Worked alongside the IT department over the summer, to prepare the school for the upcoming year."
            responsibilities={[
              "Cataloged student Chromebooks and efficiently managed an inventory database using Google Sheets.",
              "Upgraded 20+ teacher computers to Windows 11 and replaced 100+ student computers throughout the building.",
              "Installed and configured touchscreen displays, SMART Boards, and integrated peripherals such as keyboards, mice, and speakers.",
            ]}
          />
        </div>
      </div>

      <div className="blog mb-10">
        <h2 className="text-2xl mb-2">Blog</h2>
        <p>Coming soon...</p>
      </div>
    </main>
  );
}
