const LoadingProductPage = () => (
  <div className="flex flex-col md:flex-col xl:flex-col 2xl:flex-row gap-5 items-start md:w-6/12 mx-auto mt-36 p-5 border primary-border-color">
    <div className="flex flex-col h-48 w-full mx-auto gap-5">
      <div className="animate-pulse bg-slate-400 h-48 w-48 mx-auto"></div>
    </div>
    <div className=" flex flex-col gap-5 w-full">
      <div className="animate-pulse h-12 w-full bg-slate-400"></div>
      <div className="animate-pulse h-8 w-full bg-slate-400"></div>
      <div className="animate-pulse h-14 w-full bg-slate-400"></div>
    </div>
  </div>
)

export default LoadingProductPage
