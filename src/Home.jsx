import Data from "./pages/Data";
import Filter from "./pages/Filter";
import Price from "./pages/Price";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Filter style={{ marginRight: "25px" }} />{" "}
        {/*<Price style={{ marginRight: "25px" }} />*/}
      </div>
      <Data />
    </>
  );
}
export default Home;
