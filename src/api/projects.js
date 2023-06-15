import axios from "axios";

export const getProjects = async ()=>{
  const response = await axios.get("http://localhost:3000/projects")
  return response.data;
}

export const getProject = async (id)=>{
  const response = await axios.get (`http://localhost:3000/projects/${id}`)
  return response.data;
}

export const createProject = async (project) => {
  const response = await axios.post("http://localhost:3000/projects", project)
  return response.data;
}