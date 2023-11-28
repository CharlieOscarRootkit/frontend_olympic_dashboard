const AboutSection = () => {
		return (
		<section>
			{/* Container */}
			<div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
			<div className="flex flex-col items-start gap-8 lg:gap-24">
			  <div className="flex max-w-[592px] flex-col items-start gap-8 lg:gap-14">
			    <h2 className="font-bold text-3xl md:text-5xl">Meet Flowspark</h2>
			    <p className="flex-col text-[#808080] max-[479px]:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
			  </div>
			  <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
			    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg" alt="" className="inline-block h-full w-full object-cover rounded-2xl" />
			    <div className="flex w-full flex-col items-start gap-5 border border-solid border-black p-10 rounded-2xl">
			      <h2 className="font-bold text-3xl md:text-5xl">Our Mission</h2>
			      <p className="flex-col text-[#808080] max-[479px]:text-sm"> Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
			        <br />
			        <br />Massa id neque aliquam vestibulum morbi blandit. Nulla pellentesque dignissim enim sit amet venenatis.
			      </p>
			    </div>
			  </div>
			</div>
			</div>
		</section>
			)
}

export default AboutSection