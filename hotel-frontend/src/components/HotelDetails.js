import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config.json";
import { Image, Shimmer } from "react-shimmer";
import Navbar from "./Navbar";
import AppBanner from "./AppBanner";
import ImageGallery from "./imageGallery";
import ReviewAndLocation from "./ReviewAndLocation";
import MeetHost from "./MeetHost";
import Footer from "./Footer";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const HotelDetails = () => {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchHotelData = async () => {
      if (!slug) {
        console.error("Slug is undefined");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${config.API_BASE_URL}/api/hotel/${slug}`
        );
        console.log("slug=", slug);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.images = data.images.map((img) => `${config.API_BASE_URL}${img}`);
        data.host_image = `${config.API_BASE_URL}${data.host_image}`;
        setHotel(data);
        console.log("Data =", data);

        const roomsResponse = await fetch(
          `${config.API_BASE_URL}/api/hotel/${slug}/rooms`
        );
        if (!roomsResponse.ok) {
          throw new Error(`HTTP error! status: ${roomsResponse.status}`);
        }
        const roomsData = await roomsResponse.json();
        roomsData.forEach((room) => {
          room.room_image = `${config.API_BASE_URL}${room.room_image}`;
        });
        setRooms(roomsData);
        console.log("roomData =", roomsData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
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
      <AppBanner />
      <Navbar />
      <ImageGallery />
      <div className="content-wrapper">
        <LeftColumn />
        <RightColumn />
      </div>
      <ReviewAndLocation />
      <MeetHost />
      <Footer />
    </div>
  );
};

export default HotelDetails;
