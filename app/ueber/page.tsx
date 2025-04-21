import React from "react";
import Card from "../../components/cards/card";

const UeberUns = () => {
  return (

    <>
      <h1>Über uns</h1>
      <div className="custom-grid">
        <Card src="/images/Chorleiter Rainer Wetzorke.jpeg" title="Vereinsgeschichte"
          text="Hier könnt ihr etwas über die Entstehung des Chores und seine Geschichte gemeinsam mit der Stadt Weißwasser erfahren"
          link="/ueber/vereinsgeschichte" />

        <Card src="/images/Chorleiter Rainer Wetzorke.jpeg"
          title="Förderungen und Sponsoren"
          text="Der Chor hat viele Unterstützer. Sehr herzlich möchten wir uns bei den folgenden Institutionen und Unternehmen bedanken"
          link="/ueber/sponsoren" />
      </div>

    </>
  )
};

export default UeberUns;