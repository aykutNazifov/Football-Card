import React from "react";

export const FootContext = React.createContext();

class FootContextProvider extends React.Component {
  state = {
    footballers: [
      {
        name: "Kevin de Bruyne",
        team: "Manchester City",
        birth_day: "28 June 1991",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/220px-Kevin_De_Bruyne_201807091.jpg",
        about:
          "Kevin De Bruyne (born 28 June 1991) is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and the Belgium national team. De Bruyne is widely regarded as one of the best players in the world, and has often been described as a complete footballer.",
      },
      {
        name: "Lionel Messi",
        team: "Paris Saint-Germain",
        birth_day: "24 June 1987",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/220px-Lionel_Messi_20180626.jpg",
        about:
          "Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards",
      },
      {
        name: "Cristiano Ronaldo",
        team: "Manchester United",
        birth_day: "5 February 1985",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg",
        about:
          "He is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards",
      },
      {
        name: "Riyad Mahrez",
        team: "Manchester City",
        birth_day: "21 February 1991",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Alg%C3%A9rie_-_Arm%C3%A9nie_-_20140531_-_Riyad_Mahrez.jpg/220px-Alg%C3%A9rie_-_Arm%C3%A9nie_-_20140531_-_Riyad_Mahrez.jpg",
        about:
          "Riyad Karim Mahrez  (born 21 February 1991) is a professional footballer who plays as a winger for Premier League club Manchester City and captains the Algeria national team.",
      },
    ],
  };

  render() {
    return (
      <FootContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FootContext.Provider>
    );
  }
}

export default FootContextProvider;
