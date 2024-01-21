
const BlankPage = () => {
  return (
    <section>
      <div>
        <p>
          Before starting your project, it is essential
          {
            <button 
            //onClick={() => handleAddBoard()}
            >
              to create a board
            </button>
          }
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default BlankPage;
