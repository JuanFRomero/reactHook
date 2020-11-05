import React, { useEffect } from 'react';

export const Hello = () => {

        React.useEffect(() => {
            console.log('render');

            const onMouseMove = (e)=>{
                console.log(e)
            }

            window.addEventListener('mousemove', onMouseMove);

            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                console.log('unmount');
            }
        }, []); //when the second parameter is here, means that call the dependency that you can pass in

    return <div>hello</div>
}