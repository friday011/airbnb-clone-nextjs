import Image from "next/image";
import Logo from "../../public/images/logo.png";
import PlaceholderUserImage from "../../public/images/placeholder.jpg";

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log({ session });

  if (!session?.user) {
    return <main>Logged out</main>;
  }

  return (
    <main>
      <header className="w-full border flex flex-col gap-6 py-6 px-8">
        <div className="w-full flex items-center justify-between">
          <Image src={Logo} alt="Airbnb logo" className="w-[100px] h-auto" />
          <div className="flex items-center gap-8">
            <p>Stays</p>
            <p>Experiences</p>
            <p>Online experiences</p>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-sm font-medium">Airbnb your home</p>
            <button>
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={session.user.image || PlaceholderUserImage}
                  alt="User account"
                  layout="fill"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full max-w-[848px] mx-auto border border-gray-200 shadow-lg rounded-full h-16"></div>
      </header>
      {/* Main content */}
      <div>
        {/* Radiogroup Div */}
        <div>radiogroup</div>

        {/* Listing grid */}
        <div>Listing grid</div>
      </div>
    </main>
  );
};

export default Home;
