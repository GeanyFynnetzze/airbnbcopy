import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
import Test from "./Test";
import Joke from "./Joke";
import Form from "./Form";
import randomData from "./randomData";
import moreRandomData from "./moreRandomData";
import FormChallenge from "./FormChallenge";
import WindowTracker from "./WindowTracker";
import Meme from "./Meme";
import { useState } from "react";

// const array = [2, 3, 4, 5];
// const array2 = [6, 32, 1, 42];
// const cardValues = {
// status: "Available",
// img: "girl-swimmer.jpg",
// stars: 4,
// country: "Jamaica",
// description: "Swimming lessons with me",
// price: "201$",
// };
// const pokemons = [<h3>Bulbasaur</h3>, <h3>Charmander</h3>, <h3>Squirtle</h3>];

function App() {
  // const jokeElements = randomData.map((element) => {
  //   return <Joke setup={element.setup} punchline={element.punchline} />;
  // });
  // const cardElements = moreRandomData.map((element) => {
  //   return <Cards key={element.id} element={element} />;
  // });

  const [messages, setMessages] = useState(["a", "b"]);

  return (
    <div>
      <Navbar />
      <Meme />
      <WindowTracker />
      {/* <Hero />
      <section className="cards-section">{cardElements}</section> */}

      {/* <Navbar />
      <Cards
        status={cardValues.status}
        stars={cardValues.stars}
        country={cardValues.country}
        description={cardValues.description}
        price={cardValues.price}
      /> */}
      {/* 
      <Hero />
     
      <Test
        img={cat}
        name="Mr Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whisaz@catnap.meow"
      />
      <Test
        img={cat}
        name="Mr Milmoison"
        phone="07namcartelaSaM-apucidemanivela"
        email="mr.whisaz@catnap.meow"
      /> */}
      {/* <Joke
        setup="Double punchline Buddhist joke."
        punchline="Truuuuu"
        isPun={false}
      /> */}
      {/* <div>
        {messages.length === 0 ? (
          <h1>You re Free</h1>
        ) : (
          <h1>
            You have {messages.length} unread{" "}
            {messages.length > 1 ? "messages" : "message"}
          </h1>
        )}
      </div> */}
      {/* <div className="form-container">
        <FormChallenge />
      </div> */}
    </div>
  );
}

export default App;
