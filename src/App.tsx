import MainContents from "./components/MainContents";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <MainContents />
      <PageFooter />
    </>
  );
}

export default App;
