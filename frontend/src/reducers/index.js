import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './posts';
import postForm from './postForm';
import CategoriesReducer from './reducer_categories';
import SettingsReducer from './reducer_settings';
import ProfilesReducer from './reducer_profiles';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
    form: formReducer,    
    posts: posts,
    postForm: postForm,    
    categories: CategoriesReducer,
    settings: SettingsReducer,
    profiles: ProfilesReducer,
    auth: authReducer
});

export default rootReducer;
