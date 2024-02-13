const React = require("react");


function error404() {
  return (

      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="/images/cute-boy.jpg"
            alt="We are sorry"
            width="500px"
            height="700px"
          />
        </div>
        <link rel="stylesheet" href="/css/style.css" />
      </main>

  );
}

module.exports = error404;