import React, { useEffect, useState } from "react";
import {
  MapPin,
  Home,
  User,
  Users,
  Settings,
  Droplets,
  Sun,
} from "lucide-react";
import Header from "@/components/header";
import { Geolocation, Position } from "@capacitor/geolocation";
import { WeatherRoot } from "@/types/types";
import { fetchWeather } from "@/api/get";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export function Main() {
  const [activeTab, setActiveTab] = useState("'home'");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  };

  const [geolocation, setGeoLocation] = useState<Position>();
  const [weather, setWeather] = useState<WeatherRoot | undefined>();

  useEffect(() => {
    Geolocation.getCurrentPosition().then(setGeoLocation);
  }, []);

  useEffect(() => {
    if (!geolocation) return;
    fetchWeather(
      geolocation.coords.latitude,
      geolocation.coords.longitude
    ).then(setWeather);
  }, [geolocation]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 ion-padding">
      <section className="mb-8 ">
        <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
          <Sun size={24} className="mr-2 text-[#7440C0] dark:text-[#9d6fe7]" />
          Información del Clima
        </h3>
        <Card className="bg-gradient-to-r from-[#7440C0] to-[#9d6fe7] dark:from-[#5f33a3] dark:to-[#8257d5]">
          <CardHeader>
            <CardTitle className="text-white">Clima Actual</CardTitle>
            {(weather && weather.name) && (
              <CardDescription className="text-gray-200">
                Tu ubicación: {weather.name}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center">
                <Sun size={48} className="mr-4" />
                <div>
                  <p className="text-3xl font-bold">
                    {weather?.main.temp.toString().slice(0, 4)}°C
                  </p>
                  <p>{weather?.weather[0].description}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Droplets size={24} className="mr-2" />
                <span>{weather?.main.humidity}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Map Area */}
      <div className="flex-grow relative">
        <div className="absolute inset-0 bg-gray-300">
          {/* Placeholder for the map */}
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600">
            <div>{`texto longitud: ${geolocation?.coords.longitude}`}</div>
            <div>{`texto latitud: ${geolocation?.coords.latitude}`}</div>
          </div>
          {/* Family member locations */}
          <div className="absolute top-1/4 left-1/4 text-red-500">
            <MapPin size={24} />
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-blue-500">
            <MapPin size={24} />
          </div>
        </div>
      </div>

      {/* Weather Information Section */}
    </div>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center p-2 w-1/3 ${
        isActive ? "'text-[#7440C0]'" : "'text-gray-600'"
      } hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7440C0] focus:ring-opacity-50`}
      onClick={onClick}
    >
      <div className="transform transition-transform duration-200 hover:scale-110">
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
