const ExperienceItemName = ({name, date}) => {
  return (
    <div className="col-lg-4 col-12 mb-3 p-2 text-lg-end fw-700">
      <p className="agency-name">
        {name}
      </p>
      <p className="agency-date mt-3 fw-300">{date}</p>
    </div>
  );
}

export default ExperienceItemName;