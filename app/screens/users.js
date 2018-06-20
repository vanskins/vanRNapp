import React, { Component } from 'react';
import { View, Text, Alert, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../reducers/Users/Actions';
import UserCard from '../components/UserCard';
import Loading from '../components/Loading';

class User extends Component {
  state = {
    users: this.props.users,
    initialPage: 1,
    usersPrompt: this.props.usersPrompt,
    isLoading: false,
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.actions.getUsers((err, res) => {
      if (err) {
        Alert.alert('Oooops !', 'Cannot process request right now');
      } else {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 3000);
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.users !== nextProps.users) {
      this.setState({ users: nextProps.users });
    }
    if (this.props.usersPrompt !== nextProps.usersPrompt) {
      this.setState({ usersPrompt: nextProps.usersPrompt });
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {
          this.state.isLoading ?
            <Loading />
          :
            <FlatList
              data={this.state.users}
              renderItem={({ item, index }) => (
                <View key={index}>
                  <UserCard
                    label={`${item.first_name}, ${item.last_name}`}
                    avatar={item.avatar}
                  />
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={{ borderWidth: StyleSheet.hairlineWidth }}/>
              )}
              onEndReached={() => {
                const { initialPage, isLoading } = this.state;
                const page = initialPage;
                if (!isLoading && this.state.users.length > 0) {
                  this.setState({ initialPage: page + 1 }, () => {
                    this.props.actions.loadMore(this.state.initialPage);
                  });
                }
              }}
              onEndReachedThreshold={0.5}
              ListFooterComponent={() => (
                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', borderTopWidth: StyleSheet.hairlineWidth * 2 }}>
                  {
                    this.state.usersPrompt &&
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'tomato' }}>No more user to be loaded</Text>
                  }
                </View>
              )}
              keyExtractor={(item, i) => i.toString()}
            />
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    usersPrompt: state.users.usersPrompt,
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}
export default connect(mapStateToProps, mapActionsToProps)(User);
