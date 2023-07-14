const LoadingProductCard = () => (
  <div className="primary-border-color flex h-96 flex-col justify-center border">
    <div className="flex h-full flex-col justify-between gap-5 px-5 py-8">
      <div className="flex flex-col gap-2">
        <figure className="h-44 animate-pulse bg-slate-400"></figure>
        <div className="h-6 w-full animate-pulse rounded bg-slate-400"></div>
        <div className="h-6 w-16 animate-pulse rounded bg-slate-400"></div>
      </div>
    </div>
    <div className="link primary-border-color flex items-center justify-start border border-b-0 border-l-0 border-r-0 p-5 align-middle">
      <div className="h-6 w-14 animate-pulse rounded bg-slate-400"></div>
    </div>
  </div>
)

export default LoadingProductCard
