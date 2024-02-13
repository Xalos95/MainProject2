const React = require("react");

function show(data) {
  return (
    <Def>
      <main>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6">
            <img
              src={data.name.pic}
              alt={data.name.name}
              width="300px"
              height="300px"
            />
            <h3>
              Departing at: {data.departure}, {data.time}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Price</h2>
            {price}
            <h2>City Description</h2>
            {/* This is the city description */}
            <h3>{data.city}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
        </div>
        <br />
        <br />
        <br />
      </main>
    </Def>
  );
}

module.exports = show;
