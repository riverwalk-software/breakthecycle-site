export default function Example(props) {
  return (
    <div className="relative min-h-[92vh]">
      {props.image}
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm"></div>
      <div className="relative px-6 py-24 sm:px-6 sm:py-48 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {props.supplemental && (
            <p className="text-md text-white">{props.supplemental}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {props.description}
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="rounded-full bg-[#0b49d0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
