import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";

function Recommed() {
  const [x, setX] = useLocalStorage("Mode", false);
  const toggleTheme = () => {
    setX(!x);
  };

  const [moodList, setMoodList] = useState("");
  const [book, setBook] = useState("");
  const [movie, setMovie] = useState("");
  const getRecommed = () => {
    if (!moodList) return [];
    if (!book) return [];

    // const matchRecommedation = suggestion.filter()
  };

  const [datasong, setDataSong] = useState([{}]);
  const [databook, setDataBook] = useState([{}]);
  const [datamovie, setDataMovie] = useState([{}]);
  let [info, setInfo] = useState([{}]);

  const [display, setDisplay]= useState(false);

  const handleSubmitSong = async (e) => {
    e.preventDefault();
    info = {
      genre: moodList,
    };
    const gettingInfo = await fetch("http://localhost:5000/recommedsong", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((datasong) => {
        console.log(datasong);
        setDataSong(datasong);
      });
  };
  const handleSubmitBook = async (e) => {
    e.preventDefault();
    info = {
      genre: moodList,
    };
    const gettingInfo = await fetch("http://localhost:5000/recommedbook", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((databook) => {
        console.log(databook);
        setDataBook(databook);
      });
  };
  const handleSubmitMovie = async (e) => {
    e.preventDefault();
    info = {
      genre: moodList,
    };
    const gettingInfo = await fetch("http://localhost:5000/recommedmovie", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((datamovie) => {
        console.log(datamovie);
        setDataMovie(datamovie);
      });
  };

  return (
    <div className={`${
      x ? "dark" : ""
    } flex flex-col justify-end bg-white dark:bg-gray-600  `}>
      <Head>
        <title>Recommendation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header onDarkToggle={toggleTheme} />

      <div className="bg-white dark:bg-gray-700">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="mt-24 text-center text-[2.8rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-Josefin text-[#FF5A5F]"
        >
          RECOMMENDATION
        </motion.div>
        <div className="grid md:grid-cols-3 space-y-3 w-full overflow-x-hidden bg-red-200 ">


          <form className="flex-1" onSubmit={handleSubmitSong}>
            <div className="flex flex-col items-center  justify-center space-y-3 bg-red-200 px-3">
            <div className="flex flex-col items-center border border-black p-5 rounded-md">
                <label className="font-bold">Select Mood</label>
              <div
                className="flex flex-col"
                onChange={(e) => setMoodList(e.target.value)}
              >
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Pop" />
                  <label>Pop</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Rock" />
                  <label>Rock</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Meditating" />
                  <label>Meditating</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Soft" />
                  <label>Soft Rock</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Bollywood" />
                  <label>Bollywood</label>
                </div>
              </div>
              <button
                className="bg-[#FF5A5F] font-bold flex justify-between mt-2 py-2 px-4 text-white rounded-lg shadow-sm hover:shadow-xl active:scale-90 transition duration-150 "
                type="submit"
              >
                Submit
              </button>
              </div>
              <div>
                {datasong.title === null && datasong.singer === null && display ? (
                  ""
                ) : (
                  <table className="border border-black ">
                    {datasong ? (
                      <thead className="p-6">
                        <tr className="border border-black text-center font-bold text-lg ">
                          <td className="border border-black p-2">Title</td>
                          <td className="border border-black p-2">Singer</td>
                        </tr>
                      </thead>
                    ) : (
                      ""
                    )}
                    <tbody>
                      {datasong.map((d, i) => {
                        return (
                          <tr
                            className="border border-black text-center"
                            key={i}
                          >
                            <td className="border border-black p-2">
                              {d.title}
                            </td>
                            <td className="border border-black p-2">
                              {d.singer}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </form>
          <form className="flex-1" onSubmit={handleSubmitBook}>
            <div className="flex flex-col items-center  justify-center space-y-3 bg-red-200 px-3 ">
            <div className="flex flex-col items-center border border-black p-5 rounded-md">
              <label className="font-bold">Select Book</label>
              <div
                className="flex flex-col"
                onChange={(e) => setMoodList(e.target.value)}
              >
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Fiction" />
                  <label>Fiction</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Non-Fiction" />
                  <label>Non-Fiction</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Autobiography" />
                  <label>Autobiography</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Biography" />
                  <label>Biography</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Poetic" />
                  <label>Poetic</label>
                </div>
              </div>
              <button
                className="bg-[#FF5A5F] font-bold flex justify-between mt-2 py-2 px-4 text-white rounded-lg shadow-sm hover:shadow-xl active:scale-90 transition duration-150 "
                type="submit"
              >
                Submit
              </button>
              </div>
              <div>
                {databook.title === null && databook.author === null ? (
                  ""
                ) : (
                  <table className="border border-black ">
                    {databook ? (
                      <thead className="p-6">
                        <tr className="border border-black text-center font-bold text-lg ">
                          <td className="border border-black p-2">Title</td>
                          <td className="border border-black p-2">Author</td>
                        </tr>
                      </thead>
                    ) : (
                      ""
                    )}
                    <tbody>
                      {databook.map((d, i) => {
                        return (
                          <tr
                            className="border border-black text-center"
                            key={i}
                          >
                            <td className="border border-black p-2">
                              {d.title}
                            </td>
                            <td className="border border-black p-2">
                              {d.author}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </form>
          <form className="flex-1" onSubmit={handleSubmitMovie}>
            <div className="flex flex-col items-center  justify-center space-y-3 bg-red-200 px-3  ">
              <div className="flex flex-col items-center border border-black p-5 rounded-md">
              <label className="font-bold">Select Movie</label>
              <div
                className="flex flex-col"
                onChange={(e) => setMoodList(e.target.value)}
              >
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Adventure" />
                  <label>Adventure</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Drama" />
                  <label>Drama</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="SciFi" />
                  <label>Sci-Fi</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Comedy" />
                  <label>Comedy</label>
                </div>
                <div className="flex space-x-2 ">
                  <input type="radio" name="genre" value="Action" />
                  <label>Action</label>
                </div>
              </div>
              <button
                className="bg-[#FF5A5F] font-bold flex justify-between mt-2 py-2 px-4 text-white rounded-lg shadow-sm hover:shadow-xl active:scale-90 transition duration-150 "
                type="submit"
              >
                Submit
              </button>
              </div>
              <div>
                {datamovie.title === null  ? (
                  ""
                ) : (
                  <table className="border border-black ">
                    {datamovie ? (
                      <thead className="p-6">
                        <tr className="border border-black text-center font-bold text-lg ">
                          <td className="border border-black p-2">Movie</td>
                        </tr>
                      </thead>
                    ) : (
                      ""
                    )}
                    <tbody>
                      {datamovie.map((d, i) => {
                        return (
                          <tr
                            className="border border-black text-center"
                            key={i}
                          >
                            <td className="border border-black p-2">
                              {d.title}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recommed;