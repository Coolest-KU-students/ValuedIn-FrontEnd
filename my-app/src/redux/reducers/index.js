import { combineReducers } from 'redux';
import User from './User';
import Theme from './Theme';
import UserRole from './UserRole';

const CombinedReducers = combineReducers({
    Theme: Theme,
    User: User,
    UserRole: UserRole
});

export default CombinedReducers;
