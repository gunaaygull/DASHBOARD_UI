"use client";

import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

// Lokalizasyon Ayarı
const localizer = momentLocalizer(moment);


export const calendarEvents = [
    {
      title: "Math",
      allDay: false,
      start: moment("2024-08-12T08:00:00").toDate(),
      end: moment("2024-08-12T08:45:00").toDate(),
    },
    {
      title: "English",
      allDay: false,
      start: moment("2024-08-12T09:00:00").toDate(),
      end: moment("2024-08-12T09:45:00").toDate(),
    },
    {
      title: "Biology",
      allDay: false,
      start: moment("2024-08-12T10:00:00").toDate(),
      end: moment("2024-08-12T10:45:00").toDate(),
    },
    {
      title: "Physics",
      allDay: false,
      start: moment("2024-08-12T11:00:00").toDate(),
      end: moment("2024-08-12T11:45:00").toDate(),
    },
    {
      title: "Chemistry",
      allDay: false,
      start: moment("2024-08-12T13:00:00").toDate(),
      end: moment("2024-08-12T13:45:00").toDate(),
    },
    {
      title: "History",
      allDay: false,
      start: moment("2024-08-12T14:00:00").toDate(),
      end: moment("2024-08-12T14:45:00").toDate(),
    },
    {
      title: "English",
      allDay: false,
      start: moment("2024-08-13T09:00:00").toDate(),
      end: moment("2024-08-13T09:45:00").toDate(),
    },
    {
      title: "Biology",
      allDay: false,
      start: moment("2024-08-13T10:00:00").toDate(),
      end: moment("2024-08-13T10:45:00").toDate(),
    },
    {
      title: "Physics",
      allDay: false,
      start: moment("2024-08-13T11:00:00").toDate(),
      end: moment("2024-08-13T11:45:00").toDate(),
    },
    {
      title: "History",
      allDay: false,
      start: moment("2024-08-13T14:00:00").toDate(),
      end: moment("2024-08-13T14:45:00").toDate(),
    },
    {
      title: "Math",
      allDay: false,
      start: moment("2024-08-14T08:00:00").toDate(),
      end: moment("2024-08-14T08:45:00").toDate(),
    },
    {
      title: "Biology",
      allDay: false,
      start: moment("2024-08-14T10:00:00").toDate(),
      end: moment("2024-08-14T10:45:00").toDate(),
    },
    {
      title: "Chemistry",
      allDay: false,
      start: moment("2024-08-14T13:00:00").toDate(),
      end: moment("2024-08-14T13:45:00").toDate(),
    },
    {
      title: "History",
      allDay: false,
      start: moment("2024-08-14T14:00:00").toDate(),
      end: moment("2024-08-14T14:45:00").toDate(),
    },
    {
      title: "English",
      allDay: false,
      start: moment("2024-08-15T09:00:00").toDate(),
      end: moment("2024-08-15T09:45:00").toDate(),
    },
    {
      title: "Biology",
      allDay: false,
      start: moment("2024-08-15T10:00:00").toDate(),
      end: moment("2024-08-15T10:45:00").toDate(),
    },
    {
      title: "Physics",
      allDay: false,
      start: moment("2024-08-15T11:00:00").toDate(),
      end: moment("2024-08-15T11:45:00").toDate(),
    },
    {
      title: "History",
      allDay: false,
      start: moment("2024-08-15T14:00:00").toDate(),
      end: moment("2024-08-15T14:45:00").toDate(),
    },
    {
      title: "Math",
      allDay: false,
      start: moment("2024-08-16T08:00:00").toDate(),
      end: moment("2024-08-16T08:45:00").toDate(),
    },
    {
      title: "English",
      allDay: false,
      start: moment("2024-08-16T09:00:00").toDate(),
      end: moment("2024-08-16T09:45:00").toDate(),
    },
    {
      title: "Physics",
      allDay: false,
      start: moment("2024-08-16T11:00:00").toDate(),
      end: moment("2024-08-16T11:45:00").toDate(),
    },
    {
      title: "Chemistry",
      allDay: false,
      start: moment("2024-08-16T13:00:00").toDate(),
      end: moment("2024-08-16T13:45:00").toDate(),
    },
    {
      title: "History",
      allDay: false,
      start: moment("2024-08-16T14:00:00").toDate(),
      end: moment("2024-08-16T14:45:00").toDate(),
    },
  ];

  
const BigCalendar = () => {
  const [view, setView] = useState<View>("week"); // Varsayılan görünüm
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 7, 12)); // Varsayılan tarih

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold"></h1>
        <div className="flex border rounded overflow-hidden">
          <button
            className="px-4 py-2 bg-white hover:bg-gray-100 border-r"
            onClick={() => setCurrentDate(new Date())}
          >
            Today
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-gray-100 border-r"
            onClick={() =>
              setCurrentDate(
                moment(currentDate)
                  .subtract(view === "month" ? 1 : view === "week" ? 7 : 1, "days")
                  .toDate()
              )
            }
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-white hover:bg-gray-100"
            onClick={() =>
              setCurrentDate(
                moment(currentDate)
                  .add(view === "month" ? 1 : view === "week" ? 7 : 1, "days")
                  .toDate()
              )
            }
          >
            Next
          </button>
        </div>
      </div>
      
      {/* Takvim */}
      <Calendar
        localizer={localizer}
        events={calendarEvents} // Ders programı
        startAccessor="start"
        endAccessor="end"
        views={["week", "day", "month"]} // Desteklenen görünümler
        defaultView="week" // Varsayılan görünüm
        view={view} // Mevcut görünüm
        date={currentDate} // Mevcut tarih
        onView={(view) => setView(view)} // Görünüm değişikliği
        onNavigate={(date) => setCurrentDate(date)} // Tarih değişikliği
        style={{ height: "80vh" }} // Takvim boyutu
      />
    </div>
  );
};

export default BigCalendar;
