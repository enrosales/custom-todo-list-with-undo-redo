import React from 'react';
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'
import withState from './hocs/withState'
import Undo from './components/Undo';
import Redo from './components/Redo';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

function App(props) {
  return (
    <div className="App" style={styles}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <Undo />
      <Redo />
    </div>
  );
}

export default withState(App);