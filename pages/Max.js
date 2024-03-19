import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Max = ({ }) => {
  const images = [
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681609946/ant-Man-and-the-wasp-2023_eotcmf.webp', alt: 'AntMan', link: '../../Hollywood/AntMan-2023/AntMan', text: 'Ant-Man and The Wasp (2023)' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610004/farzi-2023_rxtdci.webp', alt: 'Farzi', link: '../../Bollywood/Farzi-2023/Farzi', text: 'Farzi (2023)' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610082/mayfair-witches-2023_xnbctc.webp', alt: 'Mayfair Witches', link: '../../Hollywood/MayfairWitches-2023/MayfairWitchesP1', text: 'Mayfair Witches (2023)' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610079/lady-doctor-2023_xqhk2i.webp', alt: 'Lady Doctor', link: '../../Adult/LadyDoctor-2023/LadyDoctor', text: 'Lady Doctor (2023)' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610059/hunt-2023_xmz4wn.webp', alt: 'Hunt', link: '../../Bollywood/Hunt-2023/Hunt', text: 'Hunt (2023)' },
    { src: 'https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610077/ishqiya-2023_aq0hec.webp', alt: 'Ishqiya', link: '../../Adult/Ishqiya-2023/Ishqiya', text: 'Ishqiya (2023)' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="carousel-inner relative w-full cursor-pointer m-10 overflow-hidden">
      <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-3xl dark:text-white" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }} >Watch Viewed Movies of the Month </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div onClick={() => handleImageClick(image.link)} style={{ display: "flex", justifyContent: "center", cursor: 'pointer' }}>
              <img
                className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl"
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
              />
            </div>
            <div className="text-center mt-2 text-2xl" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}  >{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Max;
