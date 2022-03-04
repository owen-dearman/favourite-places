//This component concerns the page layout for the header
import PlacesInfo from "../PlacesInfo";
import placesInfoInterface from "../placesInfoInterface";

function addLinks(): JSX.Element{
  const placeLinks = PlacesInfo.map(makeLink)
  return <>{placeLinks}</>
}

function makeLink(place: placesInfoInterface): JSX.Element{
  return(
    <div>
    <a className="LinkHeader" href={place.linkID}>
    {place.name}
    </a> |
    </div>
  );
}

function PageHeader(): JSX.Element {
  return (
    <header id="pageTop" className="PageTitle">
      <h1 style={{ fontSize: "80px" }}> Owen's Favourite Places</h1>
      <span style={{ fontSize: "30px" }}>
        {addLinks()}
      </span>
    </header>
  );
}

export default PageHeader;
