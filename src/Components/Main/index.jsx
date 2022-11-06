import { AreaMain } from "./styled";
import { Card01, Card02, Card03, Card04 }  from "./cards/Cards";

export default () => {
  return(
    <AreaMain>
      <main className="container">
        <section>
          <div className="row">
            <Card01 />
          </div>
          <div className="row">
            <Card02 />
          </div>
          <div className="row">
            <Card03 />
          </div>
          <div className="row">
            <Card04 />
          </div>
        </section>
      </main>
    </AreaMain>
  );
}