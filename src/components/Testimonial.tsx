
const Testimonial = ({ text, cite, rating }:{text:string, cite:string, rating:number}) => {

  const RatingDisplay = ({amount}:{amount:number}) => {
    let stars = '★' // ☆
    for (let i = 0; i < amount; i++) {
      stars += '★';
    }
    return <div className="text-green-600 text-3xl">{stars}</div>
  }

  return (
    <div className="flex flex-col gap-4 items-center text-xl p-4">
      <blockquote className="italic text-center text-lg">&quot;{text}&quot;</blockquote>
      <div className="uppercase text-gray-500">{cite}</div>
      <RatingDisplay amount={rating} />
    </div>
  );
}

export default Testimonial;