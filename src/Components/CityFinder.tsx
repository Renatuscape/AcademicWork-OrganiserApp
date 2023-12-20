type CityFinderProps = {

}

function CityFinder(props: CityFinderProps) {

    return
}

type DisplayCitiesProps = {
    findCities: () => string[];
}

function DisplayCities() {
    const cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
    ];

    return <div className="city-finder">
        <div id="find-field">
            <label htmlFor="city-search">Find </label>
            <input id="city-search"></input>
        </div>
        <div id="city-list">
            {cities.map((city) => (
                <p>{city}</p>
            ))}
        </div>
    </div>
}

export default DisplayCities;