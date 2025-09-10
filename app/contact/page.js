"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function ContactPageContent() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setStatus(null);
    // try {
    //   await emailjs.send(
    //     EMAILJS_SERVICE_ID,
    //     EMAILJS_TEMPLATE_ID,
    //     {
    //       firstname: form.firstname,
    //       lastname: form.lastname,
    //       email: form.email,
    //       phone: form.phone,
    //       service: form.service,
    //       message: form.message,
    //     },
    //     EMAILJS_USER_ID
    //   );
    //   setStatus("success");
    //   setForm({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",
    //     service: "",
    //     message: "",
    //   });
    // } catch {
    //   setStatus("error");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div>
      {" "}
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-hero-img.png')",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/10 bg-opacity-50 z-10"
          aria-hidden="true"
        ></div>
        {/* Hero Content */}
        <div className="container min-h-screen relative z-20 mx-auto w-full pt-[200px] flex justify-center pb-8 px-4 sm:px-6">
          <h1 className="leading-none text-2xl sm:text-4xl md:text-6xl text-white font-semibold mb-4 text-center max-w-4xl">
            Be a part of our community for inspiration.
          </h1>
        </div>
      </div>
      {/* Salvation Prayer Section */}
      <div className="w-full bg-transparent bg-cover bg-center py-12 sm:py-20 min-h-screen text-black relative">
        {/* Form container: absolute on md+, normal flow on mobile */}
        <div className="container">
          <div className=" container md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 md:translate-y-[-50%] w-full z-30">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Form */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h3 className="text-4xl text-accent">Contact us</h3>
                  <p className="text-gray-300">
                    Fill out the form below to get in touch.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="Firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      required
                      aria-label="Firstname"
                    />
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      required
                      aria-label="Lastname"
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      aria-label="Email address"
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                      aria-label="Phone number"
                    />
                  </div>
                  {/* <Select
                    value={form.service}
                    onValueChange={handleServiceChange}
                  >
                    <SelectTrigger
                      className="w-full"
                      id="service"
                      aria-label="Service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value="webDevelopment">
                          Web Development
                        </SelectItem>
                        <SelectItem value="appDevelopment">
                          App Development
                        </SelectItem>
                        <SelectItem value="seoOptimization">
                          SEO Optimization
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select> */}
                  <Textarea
                    id="message"
                    name="message"
                    className="h-[120px]"
                    placeholder="Message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-label="Message"
                  />
                  <Button
                    size="md"
                    className="max-w-40 p-6"
                    type="submit"
                    disabled={loading}
                    aria-label="Send message"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-green-400" role="status">
                      Message sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400" role="alert">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
                <Image
                  src="/contact-form-img.png"
                  alt="Contact placeholder"
                  className="w-full h-auto object-cover rounded-xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          {/* Contact Icons and Details - normal flow */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 mt-12 md:mt-[420px]">
            <div className="flex flex-col items-center gap-2">
              <FiPhone className="text-accent w-8 h-8" />
              <span className="font-semibold text-black">Call Us</span>
              <span className="text-gray-700 text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FiMail className="text-accent w-8 h-8" />
              <span className="font-semibold text-black">Send Us an Email</span>
              <span className="text-gray-700 text-sm">
                info@thecitizensplace.com
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FiMapPin className="text-accent w-8 h-8" />
              <span className="font-semibold text-black">Our Location</span>
              <span className="text-gray-700 text-sm">
                123 Main St, City, Country
              </span>
            </div>
          </div>
          <Image
            src="/contact-location-map-img.png"
            alt="Contact placeholder"
            className="w-full h-auto object-cover rounded-xl mt-12"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPageContent;
