'use client'
const { createContext, useState, useContext } = require("react");

const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {

   
    return <BlogContext.Provider value={{
       
    }
    }>
        {children}
    </BlogContext.Provider>
}

export default BlogContextProvider;
export const useBlogContext = () => useContext(BlogContext);