'use client'

function About() {
  return (
    <section className='relative min-h-screen bg-[#0A0D11]'>
      <div className='absolute left-0 top-0 text-accent w-1/2 h-screen'>
        <img src='about-gradient.svg' alt='Gradient' />
      </div>
      <div className='relative container flex flex-col justify-center pt-[180px] pb-20 '>
        <h2 className='text-accent text-center text-2xl sm:text-4xl font-bold mb-8'>
          About Yinka Oladeru
        </h2>
        <div className='flex flex-col lg:flex-row justify-center gap-12 lg:gap-8 h-auto'>
          {/* IMAGE */}
          <div className='flex-1 flex'>
            <img
              src='pastor-rectangle.svg'
              alt='Picture of Yinka Oladeru'
              className='w-full h-full max-h-[500px] object-cover rounded-[34px]'
            />
          </div>

          {/* TEXT */}
          <div className='flex-1 flex flex-col justify-between gap-4'>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less <br />
              <br /> here, content here', making it look like readable English.
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. It is a
              long established fact that a reader will be distracted by <br />{" "}
              <br /> the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
            </p>

            <div className='w-full flex justify-center gap-4'>
              {/* <button className='w-full px-6 py-4 sm:py-5 flex items-center justify-center gap-2 rounded border border-white'>
                <p className='text-base sm:text-xl'>Books</p>
              </button> */}

              <button className='w-full px-6 py-4 sm:py-5 flex items-center justify-center gap-2 rounded-md border border-white'>
                <p className='text-base sm:text-xl'>Message</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* the wife */}
      <div className='bg-white'>
        <div className='relative container flex flex-col justify-center py-20 bg-white text-[#0A0D11]'>
          <h2 className='text-[#0A0D11] text-center text-2xl sm:text-4xl font-bold mb-8'>
            About Nike Oladeru
          </h2>
          <div className='flex flex-col lg:flex-row justify-center gap-12 lg:gap-8 h-auto'>
            {/* IMAGE */}
            <div className='flex-1 flex'>
              <img
                src='nike-oladeru.jpg'
                alt='Picture of Nike Oladeru'
                className='w-full h-full max-h-[500px] object-cover rounded-[34px]'
              />
            </div>

            {/* TEXT */}
            <div className='flex-1 flex flex-col justify-between gap-4'>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less{" "}
                <br />
                <br /> here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. It is a long established fact that a reader will be
                distracted by <br /> <br /> the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content
              </p>

              <div className='w-full flex justify-center gap-4'>
                <button className='w-full px-6 py-4 sm:py-5 flex items-center justify-center gap-2 rounded-md border border-[#0A0D11]'>
                  <p className='text-base sm:text-xl'>Books</p>
                </button>

                <Link 
                  href="/nike-oladeru"
                  className='w-full px-6 py-4 sm:py-5 flex items-center justify-center gap-2 rounded-md border border-[#0A0D11] hover:bg-[#0A0D11] hover:text-white transition-all'>
                  <p className='text-base sm:text-xl'>Full Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

