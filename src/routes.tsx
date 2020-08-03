import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" exact component={TeacherList}/>
            <Route path="/give-classes" exact component={TeacherForm}/>
            {/*<Route  component={() => (<h1>Desculpe, não encontramos sua URL, volte para pagina inicial</h1>)} />*/}
        </BrowserRouter>
    )
}

export default Routes;