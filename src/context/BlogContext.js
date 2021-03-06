import React, { useReducer } from 'react';


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost': 
        return [...state, {title: `Blog Post #${state.length + 1}`}];
        default: 
        return state;
    }
};


export const BlogProvider = ({ children }) => {    // created a component to accept a child component as an argument
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type:  'add_blogPost'});
    };

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
        {children}                      
    </BlogContext.Provider>
};

export default BlogContext;
