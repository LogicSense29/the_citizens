"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { BsYoutube, BsArrowRight } from "react-icons/bs";
import { FiCalendar, FiLayers, FiSearch, FiUsers, FiPlay, FiFilter, FiChevronDown, FiChevronUp, FiLoader } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { getYoutubeVideosServer } from "@/lib/youtube-server";

// Fallback Mock Data
const fallbackMonths = ["March 2025", "February 2025", "January 2025"];
const fallbackMessages = fallbackMonths.flatMap((month, i) =>
  Array.from({ length: 4 }, (_, idx) => ({
    id: `mock-${month}-${idx}`,
    date: `${10 + idx} ${month}`,
    title: `Sermon: The Experience of ${month}`,
    series: "Sermon Series",
    speaker: i % 2 === 0 ? "Pastor Yinka Oladeru" : "Pastor Nike Oladeru",
    thumbnail: "/messages-img.png",
    description: "Sample description for the sermon."
  }))
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function MessagesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPlayingFeatured, setIsPlayingFeatured] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter States
  const [sortBy, setSortBy] = useState("newest");
  const [seriesFilter, setSeriesFilter] = useState("all");
  const [speakerFilter, setSpeakerFilter] = useState("all");

  useEffect(() => {
    async function loadVideos() {
      setLoading(true);
      try {
        const data = await getYoutubeVideosServer();
        if (data && data.length > 0) {
          setVideos(data);
        } else {
          // Keep empty or handle special case
          console.log("No videos found, using fallback UI.");
          setVideos(fallbackMessages);
        }
      } catch (err) {
        console.error("Error in loadVideos:", err);
        setError("Could not load latest messages.");
        setVideos(fallbackMessages);
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  // Extract unique series and speakers for dropdowns
  const seriesOptions = useMemo(() => {
    const series = new Set(videos.map(v => v.series).filter(Boolean));
    return Array.from(series).sort();
  }, [videos]);

  const speakerOptions = useMemo(() => {
    const speakers = new Set(videos.map(v => v.speaker).filter(Boolean));
    return Array.from(speakers).sort();
  }, [videos]);

  const filteredVideos = useMemo(() => {
    // Filter out the absolute latest message (index 0) from the archive results
    // so it doesn't appear twice if it matches a search/filter.
    const archiveVideos = videos.slice(1);
    
    let result = archiveVideos.filter(v => {
      const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            v.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSeries = seriesFilter === "all" || v.series === seriesFilter;
      const matchesSpeaker = speakerFilter === "all" || v.speaker === speakerFilter;
      
      return matchesSearch && matchesSeries && matchesSpeaker;
    });

    // Apply Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.rawDate || a.date).getTime();
      const dateB = new Date(b.rawDate || b.date).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [videos, searchQuery, seriesFilter, speakerFilter, sortBy]);

  const featuredMessage = videos[0];

  // Group videos by month
  const groupedVideos = useMemo(() => {
    const groups = {};
    
    filteredVideos.forEach(video => {
        // Extract month and year from "12 March 2025"
        const parts = video.date.split(" ");
        const key = parts.length >= 3 ? `${parts[1]} ${parts[2]}` : "Recent Messages";
        if (!groups[key]) groups[key] = [];
        groups[key].push(video);
    });
    return groups;
  }, [filteredVideos]);

  return (
    <main className='min-h-screen bg-[#F8FAFC] w-full pt-[100px] sm:pt-[140px] pb-20'>
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px]" />
      </div>

      <div className='container mx-auto px-4 relative z-10 mt-[80px]'>
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className='mb-12 text-center max-w-3xl mx-auto'
        >
          <h1 className='text-4xl sm:text-6xl font-extrabold text-[#0F172A] mb-4 tracking-tight'>
            Our <span>Messages</span>
          </h1>
          <p className='text-lg text-slate-600'>
            Explore our library of life-changing messages and dive deeper into God's word.
          </p>
        </motion.div>

        {loading ? (
             <div className="flex flex-col items-center justify-center py-20 gap-4">
                <FiLoader className="text-4xl text-blue-600 animate-spin" />
                <p className="text-slate-500 font-medium">Fetching messages...</p>
             </div>
        ) : (
          <>
            {/* Featured Message Section */}
            {featuredMessage && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col lg:flex-row items-stretch">
                  <div 
                    className="lg:w-3/5 relative aspect-video cursor-pointer group bg-black"
                    onClick={() => setIsPlayingFeatured(true)}
                  >
                    {isPlayingFeatured ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${featuredMessage.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={featuredMessage.title}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <Image
                          src={featuredMessage.thumbnail}
                          alt={featuredMessage.title}
                          fill
                          className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                          unoptimized={featuredMessage.thumbnail.startsWith('http')}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                                <FiPlay className="text-white text-3xl sm:text-4xl ml-1" />
                            </div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Latest Message</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                          <FiLayers />
                          <span className="text-sm uppercase tracking-widest">{featuredMessage.series}</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                          {featuredMessage.title}
                      </h2>
                      <div className="flex flex-col gap-2 mb-8 text-slate-500">
                          <div className="flex items-center gap-2 text-sm">
                              <FiUsers className="text-blue-500" />
                              <span>{featuredMessage.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                              <FiCalendar className="text-blue-500" />
                              <span>{featuredMessage.date}</span>
                          </div>
                      </div>
                      <a 
                        href={`https://youtube.com/watch?v=${featuredMessage.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#006CFF] text-white rounded-md font-medium transition-all duration-300 group">
                          Watch Full Message
                          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Filter Section - Glass Design */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-[130px] z-30 mb-12"
            >
                <div className='bg-white/90 backdrop-blur-md border border-white/20 shadow-xl shadow-slate-200/60 rounded-2xl p-3 sm:p-5'>
                    <div className='flex flex-col xl:flex-row gap-4 xl:gap-6 items-stretch xl:items-center'>
                        {/* Search & Toggle Row */}
                        <div className='flex gap-3 w-full xl:flex-1'>
                            <div className='flex-1 relative'>
                                <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
                                <Input
                                placeholder='Search for keywords...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full border-none bg-slate-100/70 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-md pl-12 h-12 text-slate-900 placeholder:text-slate-400'
                                />
                            </div>
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className='xl:hidden flex items-center justify-center gap-2 bg-blue-600 text-white px-4 rounded-md h-12 font-medium shadow-lg shadow-blue-500/20 active:scale-95 transition-all'
                            >
                                <FiFilter className="text-lg" />
                                <span className="text-sm hidden sm:inline">{isFilterOpen ? 'Close' : 'Filter'}</span>
                                {isFilterOpen ? <FiChevronUp /> : <FiChevronDown />}
                            </button>
                        </div>
                        
                        {/* Collapsible Selects */}
                        <AnimatePresence>
                            {(isFilterOpen) && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="flex flex-col sm:grid sm:grid-cols-3 gap-3 w-full xl:hidden overflow-hidden pt-1"
                                >
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4'>
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="text-blue-600" />
                                                <SelectValue placeholder="Sort By" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='newest'>Newest</SelectItem>
                                            <SelectItem value='oldest'>Oldest</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select value={seriesFilter} onValueChange={setSeriesFilter}>
                                        <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4'>
                                            <div className="flex items-center gap-2">
                                                <FiLayers className="text-blue-600" />
                                                <SelectValue placeholder="Series" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='all'>All Series</SelectItem>
                                            {seriesOptions.map(opt => (
                                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select value={speakerFilter} onValueChange={setSpeakerFilter}>
                                        <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4'>
                                            <div className="flex items-center gap-2">
                                                <FiUsers className="text-blue-600" />
                                                <SelectValue placeholder="Speakers" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='all'>All Speakers</SelectItem>
                                            {speakerOptions.map(opt => (
                                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Desktop Selects */}
                        <div className='hidden xl:flex gap-4 w-auto'>
                            <div className="flex flex-col min-w-[150px]">
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4 focus:ring-2 focus:ring-blue-500/20'>
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="text-blue-600" />
                                            <SelectValue placeholder="Sort By" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='newest'>Newest</SelectItem>
                                        <SelectItem value='oldest'>Oldest</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col min-w-[150px]">
                                <Select value={seriesFilter} onValueChange={setSeriesFilter}>
                                    <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4 focus:ring-2 focus:ring-blue-500/20'>
                                        <div className="flex items-center gap-2">
                                            <FiLayers className="text-blue-600" />
                                            <SelectValue placeholder="All Series" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='all'>All Series</SelectItem>
                                        {seriesOptions.map(opt => (
                                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col min-w-[150px]">
                                <Select value={speakerFilter} onValueChange={setSpeakerFilter}>
                                    <SelectTrigger className='border-none bg-slate-100/70 rounded-md h-12 px-4 focus:ring-2 focus:ring-blue-500/20'>
                                        <div className="flex items-center gap-2">
                                            <FiUsers className="text-blue-600" />
                                            <SelectValue placeholder="All Speakers" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='all'>All Speakers</SelectItem>
                                        {speakerOptions.map(opt => (
                                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Messages Grid */}
            <div className='space-y-16'>
            {Object.entries(groupedVideos).map(([groupKey, groupVideos]) => (
                <motion.div 
                    key={groupKey}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className='text-xl sm:text-2xl font-bold text-slate-800 whitespace-nowrap uppercase tracking-wide'>
                            {groupKey}
                        </h2>
                        <div className='h-px bg-slate-200 w-full' />
                        <span className="text-slate-400 font-medium whitespace-nowrap">{groupVideos.length} Messages</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {groupVideos.map((video) => (
                        <motion.div
                        variants={fadeInUp}
                        whileHover={{ y: -10 }}
                        className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100'
                        key={video.id}>
                        <div className='relative aspect-video overflow-hidden'>
                            <Image
                            src={video.thumbnail}
                            alt='Message Thumbnail'
                            fill
                            className='object-cover transition-transform duration-700 group-hover:scale-110'
                            unoptimized={video.thumbnail.startsWith('http')}
                            />
                            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center'>
                            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl'>
                                <FiPlay className="text-blue-600 text-xl ml-0.5" />
                            </div>
                            </div>
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">Youtube</span>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
                                <span>{video.series}</span>
                            </div>
                            <h3 className='text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2'>
                                {video.title}
                            </h3>
                            <div className="flex flex-col gap-1 text-slate-500 text-sm mb-6">
                                <div className="flex items-center gap-1.5">
                                    <FiUsers className="w-3.5 h-3.5" />
                                    <span>{video.speaker}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FiCalendar className="w-3.5 h-3.5" />
                                    <span>{video.date}</span>
                                </div>
                            </div>
                            
                            <a
                            href={`https://youtube.com/watch?v=${video.id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="flex items-center justify-between text-blue-600 font-semibold group/link"
                            >
                            <span className="text-sm">Watch Now</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                                <BsArrowRight />
                            </div>
                            </a>
                        </div>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
            ))}

            {filteredVideos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-400 text-lg">No messages found matching your search.</p>
                </div>
            )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
