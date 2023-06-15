import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createProject } from "../../api/projects";
import { PROJECTS_ROUTE } from "../../routes/const";
import "./NewProject.scss";

const NewProject = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [client, setClient] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const people = [];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      userId: user.id,
      title,
      description,
      imageUrl,
      client,
      startingDate,
      endingDate,
      people,
    };

    createProject(project)
      .then(() => {
        navigate(PROJECTS_ROUTE);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>Naujas Projektas</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        <FormItem
          type="text"
          label="Projekto Pavadinimas"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormItem
          type="text"
          label="Projekto aprasymas"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormItem
          type="url"
          label="Nuotraukos ULR"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <FormItem
          label="Kliento pavadinimas"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        {/* <FormItem
          type="text"
          label="Darbu vykdytojo vardas"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <FormItem
          type="date"
          label="Starting Date"
          value={startingDate}
          onChange={(e) => setStartingDate(e.target.value)}
        />
        <FormItem
          type="date"
          label="Ending Date"
          value={endingDate}
          onChange={(e) => setEndingDate(e.target.value)}
        />
        <Button className="btn-create">Sukurti Projektą</Button>
      </form>
    </div>
  );
};

export default NewProject;
