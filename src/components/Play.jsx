/* @flow */
import React from 'react';
import Header from './Header';
import Field from './Field';
import type { FieldInfo } from '../Types';
import { FieldList } from './FieldList';

export default class Play extends React.Component {
  state: {
    fieldInfo: ?FieldInfo
  }
  constructor(props: any) {
    super(props);
    this.state = {
      fieldInfo: null,
    };
  }
  componentWillMount() {
    const currentFiled = FieldList[this.props.params.level - 1];
    this.setState({
      fieldInfo: currentFiled,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Field
          level={this.props.level}
          fieldInfo={this.state.fieldInfo}
        />
      </div>
    );
  }
}
