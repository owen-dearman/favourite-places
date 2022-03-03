import MainContents from "./components/MainContents";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <div className="Main">
      <PageHeader />
      <MainContents />
      <PageFooter />
    </div>
  );
}

export default App;
