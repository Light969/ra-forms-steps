export default function TrainingSessions(value) {
  const { steps, setSteps } = value;

  return (
    <ul className="training">
      <div>
      <div className="training-header">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      </div>
      <div className="training-wrap">
        {steps
          .sort((a, b) => b.date > a.date ? 1 : -1)
          .map((step) => {
          return (
            <Data
              key={step.id}
              id={step.id}
              date={step.date}
              distance={step.distance}
              steps={steps}
              setSteps={setSteps}
            />
          );
        })}
      </div>
    </ul>
  );
}

function Data(value) {
  const { id, date, distance, steps, setSteps } = value;

  const deleteButton = (evt) => {
    const id = evt.target.closest('.data').id;

    let tmp = steps.slice(0, steps.length);

    const index = tmp.findIndex((step) => step.id === id);

    tmp.splice(index, 1);
    setSteps(tmp);
  }

  return (
    <li className="data" id={id}>
      <div>{date}</div>
      <div>{distance}</div>
      {/*  https://konstantinbulgakov.com/tools/icons */}
      <button onClick={deleteButton}>&#10008;</button>
    </li>
  );
}