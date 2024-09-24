const Title = ({ titulo, subTitulo }) => {
  return (
    <div className="section-title">
      <h2>
        {titulo} <span>{subTitulo}</span>
      </h2>
    </div>
  );
};
export default Title;
