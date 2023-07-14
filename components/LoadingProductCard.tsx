const LoadingProductCard = () => (
  <div className="h-96 flex flex-col justify-center border primary-border-color">
    <div className="h-full flex flex-col justify-between py-8 px-5 gap-5">
      <div className="flex flex-col gap-2">
        <figure className="animate-pulse h-44 bg-slate-400"></figure>
        <div className="animate-pulse h-6 w-full bg-slate-400 rounded"></div>
        <div className="animate-pulse h-6 w-16 bg-slate-400 rounded"></div>
      </div>
    </div>
    <div className="link p-5 flex align-middle justify-start items-center border border-l-0 border-r-0 border-b-0 primary-border-color">
      <div className="animate-pulse h-6 w-14 bg-slate-400 rounded"></div>
    </div>
  </div>
)

export default LoadingProductCard
