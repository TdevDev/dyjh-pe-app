import Button from "./Button";

function Home() {
  return (
    <div className=" text-center flex flex-col justify-between items-center ">
      <div className="max-h-screen">
        <img
          className="w-full max-w-md mx-auto block mt-8"
          src="../assets/DYJH_LOGO.png"
          alt="DYJH_Picture"
        />

        <h1 className="text-2xl md:text-3xl text-blue-900 font-semibold tracking-widest mb-4 mt-8">
          Let&apos;s practice.
        </h1>
        <Button to="/login" type="primary">
          Start now
        </Button>
      </div>
    </div>
  );
}

export default Home;
