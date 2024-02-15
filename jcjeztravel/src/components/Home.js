import React from "react";

const Home = () => {
     return (
          <div>
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
          height="250px" alt="japan"
          width="250px"
        />
        <h4>Japan</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1583265266785-aab9e443ee68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px" alt="Paris"
          width="250px"
        />
        <h4>Paris</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1549041050-386c1c99d655?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px" alt="L.A"
          width="250px"
        />
        <h4>Los Angeles</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px"  alt="las vagas"
          width="250px"
        />
        <h4>Las Vegas</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          height="250px" alt="sydney"
          width="250px"
        />
        <h4>Sydney Australia</h4>
      </div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="250px" alt=" n.y.c"
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
            height="350px" alt="vaction spot 1"
            width="350px" 
          />             <h5> Discover the World through budget-friendly domestic flight offers</h5>
          <h5> </h5>
        </div>
        <div className="sec-pic">
          <img
            src="https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            height="350px" alt=" vaction spot 2"
            width="350px"
          />
                             <h5>Discover enticing international flight deals to transport you to unforgettable destinations around the globe. </h5>
        </div>
        <div className="sec-pic">
          <img
            src=" https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3 "
            height="350px" alt="vaction spot 3"
            width="350px"
          />                 <h5>Indulge in affordable luxury with discounted business class flight tickets for a well-deserved treat. </h5>
         
        </div>
      </div>
    </section>
    <section>
     <h1> Tips on finding low priced fights! </h1>
     
<h3>
<ol>
  <li><strong>Best Day to Buy Tickets:</strong> Sundays are generally cheaper for both domestic and international flights, while Fridays tend to be the most expensive. Booking on Sundays could save you up to 6% on airfare.</li>
  
  <li><strong>Best Time to Buy Tickets:</strong> Prices for domestic flights usually start to increase 56 days before departure, and for international flights, prices start to increase 21 days before departure. Keep an eye on prices and compare fares across different airlines.</li>
  
  <li><strong>Cheapest Days to Fly:</strong> Fridays can be cheaper for departing flights as many travelers start their trips on Sundays. Starting your trip on a Friday could save you almost 11% compared to Sunday flights.</li>
  
  <li><strong>Cheapest Month to Fly:</strong> The cheapest month to fly varies depending on your destination. For international flights, November tends to be cheaper compared to February, offering potential savings of up to 34.6%. For domestic flights, August is often the least expensive month, offering savings of up to 35%.</li>
  
  <li><strong>Booking on Expedia:</strong> Use Expedia to compare cheap airline ticket prices from a large inventory of carriers. Stay flexible with travel dates, carriers, and flight types to get the best price. Consider becoming a member to earn rewards on every booking.</li>
  
  <li><strong>Save Money by Mixing and Matching:</strong> Mix and match airline tickets and fare types to save money on airfare. Compare prices for carriers, dates, cabin classes, and more. Booking on a Sunday and departing on a Friday could potentially save you money based on historical data.</li>
  
  <li><strong>Last-Minute Flight Deals:</strong> You can still find amazing last-minute flight deals 3 weeks prior to departure for domestic travel and 2 weeks prior for international premium flights. Economy travelers may want to book at least 4 weeks out. Stay flexible with travel dates, airports, and flight types to find the cheapest options on Expedia. Whether it's a quick business trip or a spontaneous holiday, Expedia offers a range of flight options to suit your needs.</li>
</ol> 
      </h3> 
    </section>
    
  </div>
</>



  


               
          </div>
          );
     
     };

     export default Home;