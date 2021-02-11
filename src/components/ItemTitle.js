const ItemTitle = ({titleName, description}) => {
  return (
    <div className="section-header">
      <h2 className="title">{titleName}</h2>
      <p className="lead">{description}</p>
    </div>
  );
}

export default ItemTitle;