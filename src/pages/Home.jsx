import React from "react";

function Home() {
  return (
    <>
      <div className="flex h-96 my-6">
        <div className="flex-1">
          <p className="text-5xl font-medium p-2 text-start">
            Present food dishes according to your taste!
          </p>
          <p className="text-sm font-light p-2 text-start">
            when your stomach starts to sound, it's time to find your favorie
            food and eat as eagery as you want.
          </p>
          <div className="w-4/5 h-1/4 bg-orange-dark m-auto mt-16 rounded-lg"></div>
        </div>
        <div className="flex-1">
          <div className="h-full bg-orange-dark rounded-lg"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
