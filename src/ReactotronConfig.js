import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure({ name: 'React Native Appray app' })
  .use(reactotronRedux()) 
  .connect()