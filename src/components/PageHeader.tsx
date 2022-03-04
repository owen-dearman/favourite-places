//This component concerns the page layout for the header
import PlacesInfo from "../PlacesInfo";
import placesInfoInterface from "../placesInfoInterface";

function addLinks(): JSX.Element {
  const placeLinks = PlacesInfo.map(makeLink);
  return <>{placeLinks}</>;
}

function makeLink(place: placesInfoInterface): JSX.Element {
  const id = "#" + place.linkID;
  return (
    <li>
      <a style={{ fontSize: "30px" }} className="LinkHeader" href={id}>
        {place.name}
      </a>
    </li>
  );
}

function PageHeader(): JSX.Element {
  return (
    <header id="pageTop" className="PageTitle">
      <h1 style={{ fontSize: "80px" }}> Owen's Favourite Places</h1>
      <span>{addLinks()}</span>
    </header>
  );
}

export default PageHeader;
