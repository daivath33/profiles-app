import "./Project.scss";

const ProjectPeopleInfo = ({ people }) => {
  if (people.length === 0) {
    return (
      <h4>Nėra informacijos apie projekto priežiūrą vykdančius asmenis...</h4>
    );
  }

  return (
    <div className="people">
      <h3>Atsakingi už Projekto priežiūrą:</h3>
      {people.map((person, index) => (
        <p>
          {person.name} {person.surname}, {person.position}
        </p>
      ))}
    </div>
  );
};

export default ProjectPeopleInfo;
