import "./Section.css";
function Section({ children }) {
  return (
    <>
      <div className="children">
        <p>Este componente tendra Childrens</p>
        {children}
      </div>
      );
    </>
  );
}

export default Section;
