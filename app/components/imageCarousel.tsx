'use-client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMissionStore } from "../store";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function ImageCarousel() {

    const { mission } = useMissionStore();

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            direction="horizontal"
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
            }}
            speed={2000}
            grabCursor={true}
           
        >
            {
                mission.links.flickr_images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                        onClick={() => mission.links.flickr_images ? window.open(mission.links.flickr_images[index]!, "_blank") : null} 
                        src={image} 
                        alt={`Mission Image ${index + 1}`} 
                        width={500} 
                        style={{cursor: 'pointer'}}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}