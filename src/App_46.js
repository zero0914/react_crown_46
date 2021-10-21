import './App_46.scss';
import Homepage_46 from './pages/Homepage_46';
import ShopTwoPage_46 from './pages/ShopTwoPage_46';
import ContactPage_46 from './pages/ContactPage_46';
import SigninPage_46 from './pages/SigninPage_46';
import Header_46 from './components/Header_46';
import {Switch, Route} from 'react-router-dom'

function App_46() {
  return (
    <div>
      <Header_46/>
      <Switch>
      <Route exact path ='/' component={Homepage_46} />
      <Route exact path ='/shop_46' component={ShopTwoPage_46 }/>
      <Route exact path ='/contact_46' component={ContactPage_46 }/>
      <Route exact path ='/signin_46' component={SigninPage_46 }/>
      </Switch>
    </div>
  );
}

export default App_46;
