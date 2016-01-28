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

  // <editor-fold desc="DefaultProps" defaultstate="collapsed">

  static defaultProps = {
    ...React.Component.defaultProps,
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  // </editor-fold>

  // <editor-fold desc="Constructor" defaultstate="collapsed">

  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS,
      date: props.date,
      timeZoneOffsetInHours: props.timeZoneOffsetInHours,
    };
  }

  // </editor-fold>

  // <editor-fold desc="Events" defaultstate="collapsed">

  pressButton = () => {
    let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented catalysts for change. ' +
      'Dynamically revolutionize.';

    AlertIOS.alert('Alert Title', alertMessage);
  }

  onDateChange = (date) => {
    this.setState({date: date});
  }

  // </editor-fold>

  // <editor-fold desc="Render" defaultstate="collapsed">

  render() {
    return (
      <View style={AppStyles.container}>
        <Button onPress={this.pressButton}>Press Me</Button>
        <DatePickerIOS
            date={this.state.date}
            mode="time"
            onDateChange={this.onDateChange}
        />
      </View>
    );
  }

  // </editor-fold>
}

export default App;
