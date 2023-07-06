import { RecoilRoot } from "recoil";
import { Header } from "./templates/header/header";
import { Side } from "./templates/side/side";
import { Body } from "./templates/body/body";

function App() {
  return (
    <RecoilRoot>
      <main className="w-screen h-screen flex flex-col bg-red-50 font-roboto">
        <Header />
        <section className="flex flex-1 min-h-0">
          <Side />
          <Body />
        </section>
      </main>
    </RecoilRoot>
  );
}

export default App;
