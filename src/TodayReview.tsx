import { useState } from "react";

interface ReviewData {
  comment: string;
  rating: 'good' | 'average' | 'bad'
}

function TodayReview() {
  const [todayData, setTodayData] = useState<ReviewData>({
    comment: "",
    rating: "good"
  });
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setTodayData((prevTodayData) => (
  //     {
  //       ...prevTodayData,
  //       [name]: value
  //     }
  //   )
  //   );
  // }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTodayData((prevTodayData) => (
      {
        ...prevTodayData,
        [name]: value
      }
    ));
    setIsSaved(false);
  }

  // const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTodayData({
  //     ...todayData,
  //     rating: event.target.value as 'good' | 'average' | 'bad'
  //   });
  //   setIsSaved(false);
  // };

  // const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setTodayData({
  //     ...todayData,
  //     comment: event.target.value
  //   });
  //   setIsSaved(false);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaved(true);
    // Perform any additional actions on form submission if needed
    console.log(todayData);
  };

  return (
    <div className="today-review" id="basic-container">
      <h2>Today Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="ratingOption">Rate today</label>
          <select
            name="ratingOption"
            id="ratingOption"
            value={todayData.rating}
            onChange={handleChange}
          >
            <option value='good'>Good</option>
            <option value='average'>Average</option>
            <option value='bad'>Bad</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="todayComment">Comment</label>
          <input
            id="todayComment"
            name="comment"
            value={todayData.comment}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-element">
          <button type="submit">Submit</button>
        </div>
      </form>
      {isSaved && <div style={{ paddingTop: 10 }}><h2>Report</h2><p>Today's rating: {todayData.rating}</p><p>{todayData.comment}</p></div>}
    </div>
  );
}

export default TodayReview