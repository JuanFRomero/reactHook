import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFecth } from './useFecht';
import Employee from './Employee';

////unccoment this for to see props and destructuring example
const employeeInfo=[
  {
    firtsname: 'Juan',
    lastname: 'Romero',
    age: '31'
  },
  {
    firtsname: 'Jhon',
    lastname: 'Smith',
    age: '38'
  },
  {
    firtsname: 'Liliana',
    lastname: 'Manrique',
    age: '27'
  },
  {
    firtsname: 'Nathalie',
    lastname: 'Echenique',
    age: '29'
  },
  ];

const App = () => {
  ////resets values example
  // const [values, handleChange] = useForm({ name: '', password: '', firtsName: '' });

  ////this its to see how to use toggle example
  // const [showHello, setShowHello] = useState(true);

  ////uncomment this for use counter example the other useEffects examples its to 
  // const [contador, setContador] = useState(() => JSON.parse(localStorage.getItem("contador")));
  // const { data, loading } = useFecth(`http://numbersapi.com/${contador}/trivia`);
  // const url = 'http://numbersapi.com/42/trivia';
    ////uncomment this for use counter example
  // useEffect(() => {
  //   localStorage.setItem("contador", JSON.stringify(contador));
  // }, [contador]);



////this is a example to use useEffect hook
  // useEffect(() => {
  //   console.log('render');

  //   return ()=>{
  //     //cleanup function
  //     console.log('unmount');
  //   }
  // }, [values]); //when the second parameter is here, means that call the dependency that you can pass in

////this is a example to use useEffect hook 
  // useEffect(() => {
  //   console.log('mount');
  //   return () => {
  //     console.log('unmount');
  //   }
  // }, [values.email]);

  return (
    <>
      <div className="App">


        {/* //uncomment this for use counter example check useFecht to see personalize hook that create to use this example
      <div>{!data ? "loading ..." : data}</div>
      <div>contador: {contador}</div>
      <button onClick={() => setContador(contador + 1)}>increment</button>
      <button onClick={() => setContador(contador - 1)}>decrement</button> */}
        {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      { showHello && <Hello />} */}

        {/*       this is for reset a value for a form inputs , check useForm to check the personalize hook to use this example
      <article>
        <input name="firtsName" type="text" value={values.firtsName} onChange={handleChange} />
        <input name="email" type="text" value={values.email} onChange={handleChange} />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </article> */}

        {/* discomment this for see how to use props, destructuring and spreading example */}
        <header className="App-header">
          <h1>company directory</h1>
{/*           in this example its like a props pass to another component to process one by one
          <Employee firtsname="Jack" lastname="Fernandez" age="33"/>
          <Employee firtsname="Juan" lastname="Romero" age="43"/>
          <Employee firtsname="Pedro "lastname="Guerrero" age="23"/> */}

          {/* map to use array object, to use props on dinamyx "way(?)" */}

          {employeeInfo.map(employee =>{
            // const {firtsname, lastname, age} = employee;
            console.log(employee);
            return (
              <Employee {...employee}/>
            )
          })}

        </header>
      </div>
    </>
  );
};

export default App;