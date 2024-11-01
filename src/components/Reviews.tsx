import Carousel from "./Carousel";
import Testimonial from "./Testimonial";

const Reviews = () => {
  return (
    <Carousel>
      <Testimonial text={"My dog has never looked better! The groomers at Pawsitively Perfect are so patient and caring. They really know how to make every dog feel comfortable!"} cite={"Jessica L."} rating={5}/>
      <Testimonial text={"Fantastic service! They handle my nervous pup with such care. The grooming always looks great, and the prices are reasonable. Highly recommend!"} cite={"Brian M."} rating={5}/>
      <Testimonial text={"My dog can be a bit of a handful, but they did an amazing job with him. I couldn't believe how clean and fluffy he looked after! Worth every penny."} cite={"Samantha T."} rating={5} />
      <Testimonial text={"Pawsitively Perfect lives up to its name! My dog loves going here, and I can trust they'll do a thorough and gentle job every time."} cite={"Laura J."} rating={5} />
      <Testimonial text={"I've tried a few groomers, but this is the only place I'll go now. They are kind, professional, and really good with all types of dogs."} cite={"Michael S."} rating={5} />
      <Testimonial text={"From booking to the actual grooming, everything was so smooth. My dog is always happy here, and I love that they offer a deshedding service!"} cite={"Amy K."} rating={5} />
      <Testimonial text={"Wonderful experience! They took such good care of my puppy for her first grooming. She looked adorable, and I could tell she felt at ease."} cite={"Rebecca C."} rating={5} />
      <Testimonial text={"I appreciate the attention to detail they put into their work. Every groom is perfect, and I can tell they love what they do. Highly recommended!"} cite={"Daniel R."} rating={5} />
      <Testimonial text={"My dog looks forward to every visit! The team is friendly, and their Full Groom package is an incredible deal. Five stars all the way!"} cite={"Emily P."} rating={5} />
      <Testimonial text={"Best grooming place around! They always make sure my dog looks his best, and the groomers are so friendly and professional."} cite={"Chris H."} rating={5} />
    </Carousel>
  );
}

export default Reviews;