import React from "react"

const ProjectCard = props => (
  <div className="md:max-w-lg md:m-10 mt-10 rounded-xl shadow-md">
    <div clasName="">
      <img src={props.img} alt={props.title} className="rounded-t-xl w-full h-72" />
      <div className="px-10 py-3">
        <p className="text-2xl font-bold font-header pb-2">{props.title}</p>
        <p className="font-body pb-2 text-lg">{props.description}</p>

        <div className="flex mt-5 pb-4">
          <a
            className="mr-5 transition duration-500 transform hover:scale-110 from-blue-900 to-blue-800 bg-gradient-to-r px-7 py-2 rounded-3xl shadow-sm text-white"
            href={props.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>

          <a
            className="transition duration-500 transform hover:scale-110 border-2 border-blue-700 px-7 py-2 rounded-3xl shadow-sm text-blue-700"
            href={props.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
