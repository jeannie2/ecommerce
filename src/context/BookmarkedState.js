import React, { useReducer } from "react";
import BookmarkedContext from "./BookmarkedContext";
import BookmarkedReducer from "./BookmarkedReducer";

const BookmarkedState = ({ children }) => {
  const initialState = {
    total: '',
    bookmarkedItems: []
  };

  const [state, dispatch] = useReducer(BookmarkedReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: e.target.value
    })
  }

  const addBookmark = (item, inputRef) => {
    dispatch({ type: "ADD_BOOKMARK", payload: {item, inputRef }});
  };

  const removeBookmark = (id) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: id});
  };

  return (
    <BookmarkedContext.Provider
      value={{
        total: state.total,
        bookmarkedItems: state.bookmarkedItems,
        handleChange,
        addBookmark,
        removeBookmark
      }}
    >
      {children}
    </BookmarkedContext.Provider>
  );
};

export default BookmarkedState;
