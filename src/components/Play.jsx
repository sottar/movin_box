/* @flow */
import React from 'react';
import Header from './Header';
import Field from './Field';
import type { BoxInfo, GoalInfo } from '../Types';
import { FieldList } from './FieldList';

export default class Play extends React.Component {
  state: {
    matrix: Array<number>,
    availablePositions: Array<Array<number>>,
    boxInfo: Array<BoxInfo>,
    goalInfo: Array<GoalInfo>,
  }
  constructor(props: any) {
    super(props);
    this.state = {
      matrix: [0, 0],
      availablePositions: [],
      boxInfo: [],
      goalInfo: [],
    };
  }
  componentWillMount() {
    const currentFiled = FieldList[this.props.params.level - 1];
    this.setState({
      matrix: currentFiled.matrix,
      availablePositions: currentFiled.availablePositions,
      boxInfo: currentFiled.boxInfo,
      goalInfo: currentFiled.goalInfo,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Field
          level={this.props.level}
          matrix={this.state.matrix}
          availablePositions={this.state.availablePositions}
          boxInfo={this.state.boxInfo}
          GoalInfo={this.state.goalInfo}
        />
      </div>
    );
  }
}
