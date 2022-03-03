//This component pulls in all sections for the page
import PlaceItem from "./PlaceItem";

function MainContents(): JSX.Element {
  return (
    <PlaceItem
      title={"Limestone Rocks!"}
      name={"Malham Cove"}
      country={"United Kingdom"}
      timesVisited={2}
      placeImage={[
        "/images/malhamCove.jpg",
        "Malham Cove formation in the background with a stream in the foreground and trees on either side",
      ]}
      locationLink={"https://goo.gl/maps/aaQanD5HBcKgGhFG8"}
      description={
        "This immense limestone formation was created by glacial flow thousands of years ago. I love it because it's so peaceful, being surrounded by miles and miles of countryside. It is also a reminder of how destructive yet beautiful nature can be. When sitting at the base, it feels like a throne for a giant."
      }
    />
  );
}

export default MainContents;
