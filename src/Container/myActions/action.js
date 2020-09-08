export const getData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((res) => {
        dispatch({ type: "GET_DATA", payload: res });
      });
  };
};

export const handleDetailData = (id) => {
  console.log(id);
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => result.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "DETAIL_DATA", payload: res });
      });
  };
};
export const handleFav = (id) => {
  console.log(id);
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => result.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "UPDATE_FAV", payload: res });
      });
  };
};
