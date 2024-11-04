import Carousel from "./Carousel";
import Testimonial from "./Testimonial";
import { reviews } from "@/data/const";

const Reviews = () => {
  return (
    <Carousel>
      {reviews.map((review, index) => 
        <Testimonial key={index} text={review.text} cite={review.cite} rating={review.rating}/>
      )}
    </Carousel>
  );
}

export default Reviews;