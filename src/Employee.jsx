import React from 'react'

//with this we can see how to use props and destructuring 
export default function Employee(props) {
    //we can destructur a props like a parameter of a function , its somethin like this: export default function Employee({ firtsname, lastname, age}) 

    const { firtsname, lastname, age:employeeAge } = props;
    return (
        <div>
            <h4>this is a employee: {firtsname} {lastname} , age : {employeeAge}</h4>
            {/* <h1>{`this is a employee: ${props.firtsname , props.lastname}`}</h1>  */}
        </div>
    )
}
