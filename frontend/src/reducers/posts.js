import { FETCH_POSTS, FETCH_POST } from '../actions/index';


const INITIAL_STATE = []
export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
	case 'CREATE_POST':
	    var posts = state.results;
	    var post = action.payload;
	    var tags = post.tags.split(',');
	    post.tags = tags.map((t)=>{
		return {
		    title: t,
		    slug: t
		};
	    })
	    console.log("Add created post to the stream " + JSON.stringify(post));
	    posts.unshift(post);
	    return {...state, results:posts};
	case 'FETCH_POSTS':
	    return action.payload;
	default:
	    return state;
    }
}
