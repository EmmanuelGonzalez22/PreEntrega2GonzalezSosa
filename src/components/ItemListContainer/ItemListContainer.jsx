import "../../sass/main.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
