import FormAddChild from "./FormAddChild";
import ChildrenList from "./ChildrenList";

function PageDeclare({ setHasDeclared, hasDeclared, schools }) {
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setHasDeclared(!hasDeclared)}
      >
        Retour
      </button>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Ajouter un enfant
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <FormAddChild schools={schools} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Liste d'enfants
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ChildrenList
                setHasDeclared={setHasDeclared}
                hasDeclared={hasDeclared}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDeclare;
