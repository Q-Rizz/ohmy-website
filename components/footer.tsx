export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/70 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <span className="text-2xl font-bold gradient-text orbitron">
              OHM<span className="text-white">ies</span>
            </span>
          </div>
          <div className="flex justify-center md:justify-end">
            <p className="text-sm text-gray-400 text-center md:text-right">
              &copy; 2023 OHMies Technologies. All rights reserved. <span className="hidden md:inline">|</span>{" "}
              <br className="md:hidden" />
              <span className="md:ml-2">Connecting the Future</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
