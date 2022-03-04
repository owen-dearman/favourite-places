import PlaceItem from "./PlaceItem";
import PlacesInfo from "../PlacesInfo";
import placesInfoInterface from "../placesInfoInterface";

function MainContents(): JSX.Element {
  const placesArray = PlacesInfo.map(contentBuilder);
  return <>{placesArray}</>;
}

function contentBuilder(place: placesInfoInterface): JSX.Element {
  return (
    <PlaceItem
      title={place.title}
      name={place.name}
      country={place.country}
      timesVisited={place.timesVisited}
      placeImage={place.placeImage}
      locationLink={place.locationLink}
      linkID={place.linkID}
      description={place.description}
    />
  );
}

export default MainContents;
