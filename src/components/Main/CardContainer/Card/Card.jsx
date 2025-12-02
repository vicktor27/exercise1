import "./Card.css";
const Card = (props) => {
  const { card, handleDeleteCard, handleUpdateCard } = props;

  /*  
    async function handleUpdateCard(card) {
    const likeinvertido = !card.like; //invertir el valor
    console.log(likeinvertido);
    await api
      .updateCard(card._id, likeinvertido).then(()=>{
        const temp = {...card, like:likeinvertido}
      }) //guardo en la API
      //NOS FALTA ESTO. THEN; POR ESO DEBES ACTUALIZAR LA PAGINA MANUA
      .catch((error) => console.error(error));
  }
      
     */
  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} />
      <button
        aria-label="Remove place"
        className="card__delete-button"
        type="button"
        onClick={() => {
          console.log(card);
          handleDeleteCard(card);
        }}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Like place"
          className={
            card.like
              ? "card__like-button"
              : "card__like-button card__like-button_is-active"
            /*if(card.like == true){
                return 
                "card__like-button"
                else
                  "card__like-button card__like-button_is-active"
              }*/
          }
          type="button"
          onClick={() => {
            handleUpdateCard(card);
          }}
        ></button>
      </div>
    </li>
  );
};

export default Card;
