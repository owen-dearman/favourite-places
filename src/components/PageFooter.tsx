//This component concerns the layout for the Page Footer

function PageFooter(): JSX.Element {
  return (
    <section className="FormatFooter">
      <h3>
        Created by Owen Dearman. This page does not represent endorsements of
        these places.
      </h3>
      <p>Links to other pages:</p>
      <ul>
        <li>
          <a
            className="LinkFooter"
            href="https://hardcore-northcutt-fafb4e.netlify.app/"
          >
            Laura's Favourite Places
          </a>
        </li>
        <li>
          <a className="LinkFooter" href="https://my-fav-places.netlify.app/">
            Abdul's Favourite Places
          </a>
        </li>
      </ul>
    </section>
  );
}

export default PageFooter;
