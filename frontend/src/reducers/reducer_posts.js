import { FETCH_POSTS, FETCH_POST } from '../actions/index';

/* List of all posts and an active post  */
const INITIAL_STATE = {
    all: [],
    post: null,
    postForm: {
	body: "",
	published: true,
	tags: "",
	category: ""
    }
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
	case 'UPDATE_POST_FORM':
	    return {...state,
		    postForm: {
			...state.postForm,
			body: action.payload
		    }
	    };
	case 'FETCH_POST':
	    return {...state, post: action.payload.data };
	case FETCH_POSTS:
	    /* Action returns a list of posts */
	    /* And this adds them to the state */
	    /* (creating a new state object out of old state and new posts) */
	    return {...state, all: action.payload.data};
	default:
	    return state;
    }
}
