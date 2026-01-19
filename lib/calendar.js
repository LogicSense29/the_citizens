/**
 * Utility for generating calendar links and calculating next occurrences
 */

export const SERVICES = {
  SUNDAY_SERVICE: {
    title: "Sunday Service - The Citizen's Place",
    description: "Join us for our weekly Sunday Service. An atmospheric encounter of worship, fellowship, and the living Word.",
    day: 0, // Sunday
    time: "18:00", // 6:00 PM
    duration: 90, // minutes
    location: "Online & Onsite"
  },
  WEEKLY_PRAYER: {
    title: "Weekly Prayer & Word - The Citizen's Place",
    description: "Fuel your spiritual fire mid-week. Intense intercession and deep revelations.",
    day: 4, // Thursday
    time: "21:00", // 9:00 PM
    duration: 60,
    location: "Online"
  },
  VIGIL: {
    title: "5-Hour Prayer Vigil - The Citizen's Place",
    description: "Monthly powerhouse vigil. Intense prayer, deep worship, and spiritual breakthrough.",
    occurrence: "3rd Friday", // Logic needed for this
    time: "22:00", // 10:00 PM
    duration: 300,
    location: "Online & Onsite"
  }
};

/**
 * Calculates the next occurrence of a weekly service
 */
export function getNextOccurrence(dayOfWeek, timeStr) {
  const now = new Date();
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  let date = new Date(now);
  date.setHours(hours, minutes, 0, 0);
  
  // Calculate days until next occurrence
  let daysUntil = (dayOfWeek - now.getDay() + 7) % 7;
  
  // If it's today but the time has passed, move to next week
  if (daysUntil === 0 && date < now) {
    daysUntil = 7;
  }
  
  date.setDate(date.getDate() + daysUntil);
  return date;
}

/**
 * Calculates the 3rd Friday of the current or next month
 */
export function getNextThirdFriday(timeStr) {
    const now = new Date();
    const [hours, minutes] = timeStr.split(':').map(Number);

    const getThirdFriday = (year, month) => {
        let date = new Date(year, month, 1);
        let count = 0;
        while (count < 3) {
            if (date.getDay() === 5) count++;
            if (count < 3) date.setDate(date.getDate() + 1);
        }
        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    let target = getThirdFriday(now.getFullYear(), now.getMonth());
    
    // If passed this month, get next month's
    if (target < now) {
        target = getThirdFriday(now.getFullYear(), now.getMonth() + 1);
    }

    return target;
}

/**
 * Formats date for Google Calendar (YYYYMMDDTHHMMSSZ)
 */
function formatGoogleDate(date) {
  return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
}

/**
 * Generates Google Calendar Link
 */
export function generateGoogleLink(service) {
  const start = service.id === 'VIGIL' 
    ? getNextThirdFriday(service.time) 
    : getNextOccurrence(service.day, service.time);
    
  const end = new Date(start.getTime() + service.duration * 60000);
  
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: service.title,
    dates: `${formatGoogleDate(start)}/${formatGoogleDate(end)}`,
    details: service.description,
    location: service.location,
    sf: "true",
    output: "xml"
  });
  
  return `${baseUrl}&${params.toString()}`;
}

/**
 * Generates ICS file content and triggers download
 */
export function downloadICS(service) {
  const start = service.id === 'VIGIL' 
    ? getNextThirdFriday(service.time) 
    : getNextOccurrence(service.day, service.time);
    
  const end = new Date(start.getTime() + service.duration * 60000);

  const formatDateICS = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `URL:${window.location.href}`,
    `DTSTART:${formatDateICS(start)}`,
    `DTEND:${formatDateICS(end)}`,
    `SUMMARY:${service.title}`,
    `DESCRIPTION:${service.description}`,
    `LOCATION:${service.location}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${service.title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
