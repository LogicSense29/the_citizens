import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { FiCalendar, FiLayers, FiSearch, FiUsers } from "react-icons/fi";

// Simulate backend data
const months = [
  "March 2025",
  "February 2025",
  "January 2025",
  "December 2024",
  "November 2024",
  "October 2024",
];
const messages = months.flatMap((month, i) =>
  Array.from({ length: Math.floor(Math.random() * 4) + 3 }, (_, idx) => ({
    id: `${month}-${idx}`,
    date: `${Math.floor(Math.random() * 28) + 1} ${month}`,
    title: `Message for ${month} ${idx + 1}`,
  }))
);

export default function MessagesPageContent() {
  return (
    <main className="min-h-screen bg-[#eaf3ff] w-full  pt-[180px]">
      <div className="container mx-auto py-12 px-4 pt-[120px]">
        {/* Filter Section */}
        <div className="p-6 sm:p-12 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 sm:gap-8 mb-4">
            <h1 className="text-4xl sm:text-6xl font-bold flex-shrink-0 text-black">
              Watch our past messages
            </h1>
            <div className="w-full sm:w-1/2 max-w-md flex flex-col">
              <div className="relative flex items-center">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                <Input
                  id="search"
                  type="text"
                  placeholder="Search for keywords"
                  className="w-full border-2 border-blue-200 focus:border-blue-600 focus:ring-blue-600 rounded-lg pl-10 pr-4 py-2"
                  aria-label="Search for keywords"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-full sm:w-auto min-w-[160px] flex flex-col">
              <div className="relative flex items-center">
                <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                <Select defaultValue="date" className="text-black">
                  <SelectTrigger
                    id="date-range"
                    className="w-full min-w-[160px] pl-10"
                  />
                  <SelectContent>
                    <SelectItem value="date">Date Range</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full sm:w-auto min-w-[160px] flex flex-col">
              <div className="relative flex items-center">
                <FiLayers className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                <Select defaultValue="all">
                  <SelectTrigger
                    id="series"
                    className="w-full min-w-[160px] pl-10"
                  />
                  <SelectContent>
                    <SelectItem value="all">All Series</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full sm:w-auto min-w-[160px] flex flex-col">
              <div className="relative flex items-center">
                <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                <Select defaultValue="all">
                  <SelectTrigger
                    id="speakers"
                    className="w-full min-w-[160px] pl-10"
                  />
                  <SelectContent>
                    <SelectItem value="all">All Speakers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Messages Grid */}
        <div className="space-y-12 mb-12">
          {months.map((month) => {
            const monthMessages = messages.filter((msg) =>
              msg.date.includes(month.split(" ")[0])
            );
            return (
              <div key={month}>
                <h2 className="text-xl font-semibold text-black mb-4">
                  {month} ({monthMessages.length})
                </h2>
                <div className="border-t border-black my-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {monthMessages.map((message) => (
                    <div
                      className="bg-[#eaf3ff] rounded-lg p-3 sm:p-4 md:p-6 m-1 sm:m-2 md:m-4"
                      key={message.id}
                    >
                      <div className="relative">
                        <Image
                          src="/messages-img.png"
                          alt="Message Image 1"
                          className="mb-4 w-full h-auto"
                          width={400}
                          height={200}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/yt-logo-icon.svg"
                              alt="YouTube Play Icon"
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 text-white"
                              width={50}
                              height={50}
                            />
                          </a>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-700">
                        {message.title}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                        Kindly subscribe to our YouTube channel.
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                        {message.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
