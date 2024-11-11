import "./Disciplina.css";

function Disciplina(props) {

  return (
    <div className="disciplina">
      <h2>{props.codigo}</h2>
      <h3>{props.nome}</h3>
    </div>
  );
}

export default Disciplina;
