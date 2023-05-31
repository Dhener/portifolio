import "./Botao.css";

const Botao = (props) => {
  return (
    <a href={props.nome} className="botao">
      {props.texto}
    </a>
  );
};

export default Botao;
