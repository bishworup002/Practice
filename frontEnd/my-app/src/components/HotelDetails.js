import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config.json';
import { Image, Shimmer } from 'react-shimmer';

const HotelDetails = () => {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchHotelData = async () => {
      if (!slug) {
        console.error('Slug is undefined');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${config.API_BASE_URL}/api/hotel/${slug}`);
        console.log("slug=", slug);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.images = data.images.map(img => `${config.API_BASE_URL}${img}`);
        data.host_image = `${config.API_BASE_URL}${data.host_image}`;
        setHotel(data);
        console.log("Data =", data);

        const roomsResponse = await fetch(`${config.API_BASE_URL}/api/hotel/${slug}/rooms`);
        if (!roomsResponse.ok) {
          throw new Error(`HTTP error! status: ${roomsResponse.status}`);
        }
        const roomsData = await roomsResponse.json();
        roomsData.forEach(room => {
          room.room_image = `${config.API_BASE_URL}${room.room_image}`;
        });
        setRooms(roomsData);
        console.log("roomData =", roomsData);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return <div>Hotel Not Found</div>;
  }

  return (
    <div className="hotel-details">
      <h1>{hotel.title}</h1>
      <div className="image-gallery">
        {hotel.images.map((img, index) => (
          <img key={index} src={img} alt={`Hotel ${index + 1}`} />
        ))}
      </div>
      <div className="hotel-info">
        <p>{hotel.description}</p>
        <p>Guests: {hotel.guest_count}</p>
        <p>Bedrooms: {hotel.bedroom_count}</p>
        <p>Bathrooms: {hotel.bathroom_count}</p>
      </div>
      <div className="amenities">
        <h2>Amenities</h2>
        <ul>
          {hotel.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="host-info">
        <h2>Host</h2>
        <img src={hotel.host_image} alt={hotel.host_name} />
        <p>{hotel.host_name}</p>
      </div>
      <div className="rooms">
        <h2>Rooms</h2>
        {rooms.map((room, index) => (
          <div key={index}>
            <h3>{room.room_title}</h3>
            <p>Bedrooms: {room.bedroom_count}</p>
            <Image
              src={room.room_image}
              fallback={<Shimmer width={400} height={300} />}
              alt={`Room image for ${room.room_title}`}
            />
          </div>
        ))}
      </div>
      <div className="location">
        <h2>Location</h2>
        <p>{hotel.address}</p>
        {/* You would integrate a map component here using hotel.latitude and hotel.longitude */}
      </div>
    </div>
  );
};

export default HotelDetails;