<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to J.C.J.E.Z Travel</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .container {\n        display: flex; /* Use flexbox layout */\n        flex-wrap: nowrap; /* Ensure items stay in a single line */\n        overflow-x: auto; /* Add horizontal scroll if needed */\n        gap: 20px; /* Add some space between items */\n    }\n    \n    .section{\n        display: flex; /* Use flexbox layout */\n        flex-wrap: nowrap; /* Ensure items stay in a single line */\n        overflow-x: auto; /* Add horizontal scroll if needed */\n        gap: 10px; /* Add some space between items */\n    }\n\n    .sec-pic{\n        flex: 0 0 auto; /* Allow items to shrink and grow, but not shrink below their content's intrinsic width */\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .img {\n        flex: 0 0 auto; /* Allow items to shrink and grow, but not shrink below their content's intrinsic width */\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .img img {\n        display: block; /* Make images behave like block-level elements */\n        max-width: 100%; /* Ensure images don't exceed their container's width */\n        height: auto; /* Maintain aspect ratio */\n    }\n\n    h4  {\n        text-align: center; /* Center align the text */\n    }\n\n    h1{\n        text-align: center;\n        background-color:lightblue;\n     }\n\n     .search-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 50px;\n  }\n\n  .search-input {\n    margin-right: 10px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  .search-button {\n    padding: 10px 20px;\n    background-color: #1c63af;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n"
    }}
  />
  <header>
    <h1>Welcome to J.C.J.E.Z Travel</h1>
  </header>
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      id="fromInput"
      placeholder="Leaving from"
    />
    <input
      type="text"
      className="search-input"
      id="toInput"
      placeholder="Going to"
    />
    <input type="date" className="search-input" id="dateInput" />
    <input
      type="number"
      className="search-input"
      id="travelersInput"
      placeholder="Number of travelers"
    />
    <button className="search-button" onclick="search()">
      Search
    </button>
  </div>
  <h2 className="pop">Popular Travel Destinations </h2>
  <div className="body">
    <div className="container">
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"
          width="250px"
        />
        <h4>Japan</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1583265266785-aab9e443ee68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"
          width="250px"
        />
        <h4>Paris</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1549041050-386c1c99d655?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"
          width="250px"
        />
        <h4>Los Angeles</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"
          width="250px"
        />
        <h4>Las Vegas</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          height="250px"
          width="250px"
        />
        <h4>Sydney Australia</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"
          width="250px"
        />
        <h4>New York City</h4>
      </div>
    </div>
    <h1>Exclusive airfare offers departing from your area!!</h1>
    <section>
      <div className="section">
        <div className="sec-pic">
          <img
            src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            height="350px"
            width="350px"
          />
          <h5> </h5>
        </div>
        <div className="sec-pic">
          <img
            src="https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            height="400px"
            width="350px"
          />
          <h5> </h5>
        </div>
        <div className="sec-pic">
          <img
            src=" https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3 "
            height="305px"
            width="350px"
          />
          <h5> </h5>
        </div>
      </div>
    </section>
  </div>
</>



