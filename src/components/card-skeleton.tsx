import card from "#@/styles/css/card.module.css";
export default function CardSkeleton () {
  return (
    <div className={ card.layout }>
      <h4 className={ card.title }>Cargando...</h4>
      <p className={ card.content }>
        Su contenido se está cargando, espere un momento
      </p>
      <sub>0 de 0</sub>
      <button className={ card.link }>
        <span className="material-symbols-outlined">autorenew</span>
      </button>
    </div>
  );
}
