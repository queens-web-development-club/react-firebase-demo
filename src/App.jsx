import { useEffect, useState } from "react";
import {db} from "./firebase"
import { getDoc, doc, setDoc } from "firebase/firestore";

async function getContent(){
  const docRef = doc(db, "content/bvfMf0VDnMEj6A6mHOiz")
  const content = await getDoc(docRef)
  return content.data()
}
function setContent(newContent){
  const docRef = doc(db, "content/bvfMf0VDnMEj6A6mHOiz")
  setDoc(docRef, newContent)
}

function App() {
  const [aboutMe, setAboutMe] = useState("")
  const [languages, setLanguages] = useState([])
  const [inputLang, setInputLang] = useState("")
  const [projects, setProjects] = useState([])
  const [inputProject, setInputProject] = useState("")

  useEffect(()=>{
    getContent().then((content)=>{
      console.log(content)
      setAboutMe(content.aboutMe)
      setLanguages(content.languages)
      setProjects(content.projects)
    })
  }, [])

  return (
    <div>
      <h1>CMS</h1>

      <h2>About Me</h2>
      <textarea name="" id="" value={aboutMe}
      onChange={(e)=>{
        setAboutMe(e.target.value)
      }}
      >
      </textarea>

      
      <h2>Programming Languages</h2>
      <ul>
        {languages.map((language)=>{
          return (
            <div>
              <li>{language}</li>
              <button onClick={()=> setLanguages(languages.filter((lang)=>lang !== language))}>Delete</button>
            </div>
          )
        })}
      </ul>
      <input type="text" onChange={(e)=> setInputLang(e.target.value)} value={inputLang}/>
      <br />
      <button onClick={()=> {
        setLanguages([...languages, inputLang])
        setInputLang("")
      }}>Add</button>

      <h2>Projects</h2>
      <ul>
        {projects.map((project)=>{
          return (
            <div>
              <li>{project}</li>
              <button onClick={()=> setProjects(projects.filter((proj)=>proj !== project))}>Delete</button>
            </div>
          )
        })}
      </ul>
      <input type="text" onChange={(e)=> setInputProject(e.target.value)} value={inputProject}/>
      <br />
      <button onClick={()=> {
        setProjects([...projects, inputProject])
        setInputProject("")
      }}>Add</button>

      <br />
      <button onClick={()=>{
        const newContent = {
          aboutMe: aboutMe,
          languages: languages,
          projects: projects
        }
        setContent(newContent)
      }}>Save</button>
    </div>
  )
}

export default App
