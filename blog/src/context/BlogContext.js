import React, { useReducer } from "react";


const BlogContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return [...state, { title: action.payload.title, id: state.length + 1, content: action.payload.content }]
        case 'delete':
            return state.filter((post) => post.id !== action.payload)
        case 'edit':
            console.log(state.filter((post) => post.id !== action.payload.id))
            return [...state.filter((post) => post.id !== action.payload.id), { title: action.payload.title, id: action.payload.id, content: action.payload.content }]
        default:
            return state

    }
}

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(reducer, []);



    return <BlogContext.Provider value={{ posts: blogPosts, dispatch }}>
        {children}
    </BlogContext.Provider>

}

export default BlogContext;