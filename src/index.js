import React from 'react';
import ReactDOM from 'react-dom';
import SimpleContainer from './Container';


const App=()=>{
    
    return(
        <div>
            <SimpleContainer/>
        </div>
        
    );
};


ReactDOM.render(<App/>,document.querySelector('#root'));
