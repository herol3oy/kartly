const LoadingProductPage = () => (
  <div className="primary-border-color mx-auto mt-36 flex flex-col items-start gap-5 border p-5 md:w-6/12 md:flex-col xl:flex-col 2xl:flex-row">
    <div className="mx-auto flex h-48 w-full flex-col gap-5">
      <div className="mx-auto h-48 w-48 animate-pulse bg-slate-400"></div>
    </div>
    <div className=" flex w-full flex-col gap-5">
      <div className="h-12 w-full animate-pulse bg-slate-400"></div>
      <div className="h-8 w-full animate-pulse bg-slate-400"></div>
      <div className="h-14 w-full animate-pulse bg-slate-400"></div>
    </div>
  </div>
)

export default LoadingProductPage
