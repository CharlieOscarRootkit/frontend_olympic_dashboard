import Link from 'next/link'

export default function FourOhFour() {
  return <>
   
    <div className="flex flex-1 items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        <div className="max-w-xs">
          <h1 className="text-5xl font-bold text-heading">oops...</h1>
          <h2 className="mt-8 text-2xl font-semibold text-heading">
            Page not found.
          </h2>
          <p className="mt-4 font-medium text-text">
            It seems this page is missing.
            <span className="inline-block">
              Please check the URL or go home.
            </span>
          </p>
          <a
            href="#"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Go Home
          </a>
        </div>
        <div>
          <img
            src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/examples/concerned-girl.png"
            alt="concerned girl in yellow sweatshirt"
            className="aspect-square w-full max-w-sm"
          />
        </div>
      </div>
    </div>

  </>
}