import React, { Component } from 'react';
import StudentApi from '../api/student';

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    // TODO GTB-知识点: + 获取数据逻辑正确
    StudentApi.getAll().then((data) => {
      this.setState({ studentList: data });
    });
  }

  render() {
    return this.state.studentList.map((student) => {
      return (
        <div key={student.id}>
          {student.id}
          {student.name}
        </div>
      );
    });
  }
}

export default StudentList;
