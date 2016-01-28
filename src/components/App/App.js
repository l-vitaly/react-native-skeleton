import React from 'react-native';
import Button from 'react-native-button';
import {AppStyles} from './Styles';

const {
  AlertIOS,
  DatePickerIOS,
  Platform,
  View,
  } = React;

class App extends React.Component {

  static defaultProps = {
    ...React.Component.defaultProps,
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS,
      date: props.date,
      timeZoneOffsetInHours: props.timeZoneOffsetInHours,
    };
  }

  pressButton() {
    let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented catalysts for change. ' +
      'Dynamically revolutionize.';

    AlertIOS.alert('Alert Title', alertMessage);
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <Button onPress={this.pressButton}>Press Me</Button>
        <DatePickerIOS
            date={this.state.date}
            mode="time"
            onDateChange={(date) => this.onDateChange(date)}
        />
      </View>
    );
  }
}

export default App;
