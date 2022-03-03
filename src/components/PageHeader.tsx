//This component concerns the page layout for the header

function PageHeader(): JSX.Element {
  return (
    <header id="pageTop" className="PageTitle">
      <h1 style={{ fontSize: "100px" }}> Owen's Top 5 Places</h1>
      <span style={{ fontSize: "35px" }}>
        <a className="LinkHeader" href="#malhamCove">
          Malham Cove
        </a>{" "}
        |{" "}
        <a className="LinkHeader" href="#york">
          York
        </a>{" "}
        |{" "}
        <a className="LinkHeader" href="#cheslyn">
          Cheslyn Gardens
        </a>{" "}
        |{" "}
        <a className="LinkHeader" href="#porec">
          Porec
        </a>{" "}
        |{" "}
        <a className="LinkHeader" href="#coch">
          Cochituate
        </a>{" "}
      </span>
    </header>
  );
}

export default PageHeader;
