import "./Disciplina.css";

function Disciplina() {

    const codigo = "DCC207"
    const nome = "Desenvolvimento Front-End"

  return (
    <div className="disciplina">
      <h2>{codigo}</h2>
      <h3>{nome}</h3>
    </div>
  );
}

export default Disciplina;
