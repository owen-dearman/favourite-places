//This component pulls in all sections for the page
import PlaceItem from "./PlaceItem";

function MainContents(): JSX.Element {
  return (
    <section>
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
      <PlaceItem
        title={"Bowled a Yorker"}
        name={"York"}
        country={"United Kingdom"}
        timesVisited={100}
        placeImage={["/images/york.jpg", "York Shambles"]}
        locationLink={"https://goo.gl/maps/9Arjyy6Ka8uzCvsg8"}
        description={
          "I spent 4 years in York at university and it quickly rose to become one of my favourite places, not least because it's where I met my girlfriend. It ouses (wink wink) culture and friendliness that I've yet to experience elsewhere"
        }
      />
      <PlaceItem
        title={"The Secret Garden"}
        name={"Cheslyn Gardens"}
        country={"United Kingdom"}
        timesVisited={10}
        placeImage={[
          "/images/cheslyn.jpeg",
          "Cheslyn house situated in its grounds",
        ]}
        locationLink={"https://goo.gl/maps/HzhdzLHXLHcWUe239"}
        description={
          "This hidden oasis of lawn, trees and flowers is one of, if not the best hidden treasure of Watford. With a fish pond and aviary, it's a secluded place to wander and get lost in your thoughts"
        }
      />
      <PlaceItem
        title={"> Dubrovnik"}
        name={"Porec"}
        country={"Croatia"}
        timesVisited={1}
        placeImage={[
          "/images/porec.jpg",
          "The peninsula of Porec with Meditteranean houses and clear blue sea",
        ]}
        locationLink={"https://goo.gl/maps/6hY2uErzHpnRrJf88"}
        description={
          "This represents my favourite family holiday, with sun, sea and the most beautiful architecture I've ever seen. Take me back!"
        }
      />
      <PlaceItem
        title={"Say it like you're sneezing"}
        name={"Cochituate State Park"}
        country={"United States of America"}
        timesVisited={4}
        placeImage={[
          "/images/cochituate.jpeg",
          "The boat house infront of the middle lake at sunset",
        ]}
        locationLink={"https://goo.gl/maps/9Ju3r6ZMMAmQX25d9"}
        description={
          "Kayaking, barbeques, swimming and walking - in this park you can do it all. With three mahoosive lakes connected by tunnels, there is endless potential for exploration."
        }
      />
    </section>
  );
}

export default MainContents;
