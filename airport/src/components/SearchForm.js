import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { search, searchChanged } from '../actions';
import { CardSection, Input, Button, Spinner } from './common';

class SearchForm extends Component {

  onSearchInputChange(text) {
    this.props.searchChanged(text);
  }

  onButtonPress() {

    const { forwardKey, searchValue } = this.props;

    if (forwardKey) {
      Actions[forwardKey]();
    }
    this.props.search({ searchValue });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Search
      </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;

    return (
      <View>
        <CardSection style={{ flexDirection: 'row' }}>
            <Input
                style={{ flex: 0.75 }}
                placeholder="Search"
                onChangeText={this.onSearchInputChange.bind(this)}
                value={this.props.searchValue}
            />

            {this.renderButton()}

        </CardSection>

        <Text style={errorTextStyle}>{this.props.error }</Text>

      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10

  }
};

const mapStateToProps = (state) => {
  const { searchValue, error, loading } = state.searchForm;
  return { searchValue, error, loading };
};

export default connect(mapStateToProps, {
  searchChanged,
  search
})(SearchForm);
