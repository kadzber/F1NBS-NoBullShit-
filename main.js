RaceWinner();

async function RaceWinner() {
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/last/results.json`
    );

    if (!response.ok) {
      throw new Error("uneable to fetch data");
    }

    const data = await response.json();
    const FirstPlace =
      "Race winner :" +
      "" +
      data.MRData.RaceTable.Races[0].Results[0].Driver.driverId;

    document.getElementById("RaceWinner").innerHTML = FirstPlace;
  } catch (error) {
    console.error(error);
  }
}

RaceGridFinishResoult();

async function RaceGridFinishResoult() {
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/last/results.json`
    );
    if (!response.ok) {
      throw new Error("uneable to fetch data");
    }

    const data = await response.json();
    const RaceGridFinis = data.MRData.RaceTable.Races[0].Results;

    const RaceResoultFormatted = RaceGridFinis.map((result) => {
      const driver = result.Driver;
      const position = result.position;
      const finishPlace = result.position;
      console.log(finishPlace);

      //console.log(data.MRData.RaceTable.Races[0].Results[0].position);

      return `

<li class="list-group-item"> ${result.position}: ${driver.givenName} ${driver.familyName} </li>`;

      console.log(RaceResoultFormatted);
    }).join("");

    document.getElementById("RaceResoult").innerHTML = `
      <div class="position-list">
        <h4>Race Results</h4>
        <ul class="list-group">
          ${RaceResoultFormatted}
        </ul>
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
}
