import "./Disciplina.css";

function Disciplina({codigo, nome}) {

  return (
    <div className="disciplina">
      <h2>{codigo}</h2>
      <h3>{nome}</h3>
    </div>
  );
}

export default Disciplina;
