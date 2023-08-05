import React, { Component } from 'react';
import Container from './utils/Container';
import Section from './utils/Section';
import Form from './components/Form';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  voiteHandler = event => {
    const option = event.target.value.toLowerCase();
    this.setState(pervState => {
      return {
        [option]: pervState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    return <span>Total</span>;
  }

  countPositiveFeedbackPercentage() {
    return <span>Positive</span>;
  }

  render() {
    return (
      <>
        <Container>
          <Section Title="Please leave feedback">
            <Form>
              <FeedbackOptions options={this.options} fn={this.voiteHandler} />
            </Form>
          </Section>
          <Section Title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={'10'}
              positivePercentage={'70'}
            />
          </Section>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
