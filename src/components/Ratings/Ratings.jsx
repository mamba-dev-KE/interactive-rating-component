import "./Ratings.scss";

const Ratings = () => {
  const handleClick = (e) => {};

  return (
    <div className="ratings flex">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button className="ratings__item grid grid-center pointer" key={rating}>
          {rating}
        </button>
      ))}
    </div>

    // <div className="ratings flex">
    //   <button
    //     className={
    //       !isActive
    //         ? "ratings__item ratings__item--active grid grid-center pointer"
    //         : "ratings__item grid grid-center pointer"
    //     }
    //     value={1}
    //     onClick={(e) => {
    //       setIsActive(!isActive);
    //       setSelectedButton(e.target.value);
    //     }}
    //   >
    //     1
    //   </button>
    //   <button
    //     className="ratings__item grid grid-center pointer"
    //     value={2}
    //     onClick={(e) => setSelectedButton(e.target.value)}
    //   >
    //     2
    //   </button>
    //   <button
    //     className="ratings__item grid grid-center pointer"
    //     value={3}
    //     onClick={(e) => setSelectedButton(e.target.value)}
    //   >
    //     3
    //   </button>
    //   <button
    //     className="ratings__item grid grid-center pointer"
    //     value={4}
    //     onClick={(e) => setSelectedButton(e.target.value)}
    //   >
    //     4
    //   </button>
    //   <button
    //     className="ratings__item grid grid-center pointer"
    //     value={5}
    //     onClick={(e) => setSelectedButton(e.target.value)}
    //   >
    //     5
    //   </button>
    // </div>
  );
};

export default Ratings;
