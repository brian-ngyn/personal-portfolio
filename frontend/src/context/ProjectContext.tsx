import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export interface ProjectSchema {
  name: string;
  languages: any;
  description: string;
  image: string;
  link: string;
}

type ProjectContextType = {
  projectList: ProjectSchema[];
  getProjects: () => void;
}

const projectContext = createContext<Partial<ProjectContextType>>({});

export function ProjectContextProvider({ children }: Props) {
  const [projectList, setProjectList] = useState<ProjectSchema[]>([]);

  function getProjects() {
    axios.get(import.meta.env.VITE_AWS_LAMBDA_API + "/api/get-all").then((response) => {
      setProjectList(response.data);
    });
  };

  // function getProjects() {
  //   axios.get("http://localhost:3001/api/get-all").then((response) => {
  //     setProjectList(response.data);
  //   });
  // };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <projectContext.Provider value={{ projectList, getProjects }}>
      {children}
    </projectContext.Provider>
  )
}

export function useProjectContext() {
  return useContext(projectContext);
}