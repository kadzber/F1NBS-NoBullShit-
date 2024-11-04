RaceWinner();

async function RaceWinner() {
  try {
    const response = await fetch(
      `http://ergast.com/api/f1/current/last/results.json`
    );

    if (!response.ok) {
      throw new Error("Uneable to fetch data");
    }

    const data = await response.json();
    const firstPlaceDriverId =
      data.MRData.RaceTable.Races[0].Results[0].Driver.driverId;
    const firstPlace = `Race winner: ${firstPlaceDriverId}`;

    document.getElementById("RaceWinner").innerHTML = firstPlace;
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
      throw new Error("Unable to fetch data");
    }

    const data = await response.json();
    const RaceGridFinish = data.MRData.RaceTable.Races[0].Results;

    const resultsHTML = RaceGridFinish.map((result) => {
      const driver = result.Driver;
      const position = result.position;
      const points = result.points;

      const pointsDisplay = points > 0 ? points : "";

      return `
        <tr>
          <td>${position}</td>
          <td>${driver.givenName} ${driver.familyName}</td>
          <td>${pointsDisplay}</td>
        </tr>
      `;
    }).join("");

    document.getElementById("RaceResoult").innerHTML = `
      <div class="position-list">
        <h4>Race Results</h4>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody class="hover">
            ${resultsHTML} 
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
}
