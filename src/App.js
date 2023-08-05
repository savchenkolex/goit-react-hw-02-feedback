import React, {Component} from "react";
import PullForm from "./components/PullForm";
import Container from "./components/Container";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0  
}

//  formHeandler (e) {
//     console.log(e);
//   }

  render() { 
   return (<>
    <Container>
    <PullForm status={this.state} />
    <Statistics status={this.state} />
    </Container>
    <Footer />
    </>
    )
  }
}

export default App;
