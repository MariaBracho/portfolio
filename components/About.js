export default function About() {
  return (
    <div className="bg-[url('../public/assets/Images/background.svg')] flex justify-center  w-full h-[500px] bg-no-repeat bg-cover my-8  text-white px-5  py-12 text-sm md:text-lg md:px-11 md:bg-[url('../public/assets/Images/bg_md.svg')] md:h-[600px]">
      <div className="w-full md:w-4/5 mt-5 md:mt-11">
        <p className="text-2xl font-medium text-center">¿Por qué yo?</p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3  items-center h-80 w-full justify-center md:w-4/5 ">
            <div className="flex gap-1">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p>Me desenvuelvo con tecnologías frontend..</p>
            </div>
            <div className="flex gab-1">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p>Creativa.</p>
            </div>
            <div className="flex gab-1">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p>Autodidacta.</p>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3 row-span-4 h-full flex items-end justify-center ">
              <div className="bg-[url('../public/assets/Images/human.svg')] w-[120px] bg-no-repeat  bg-contain h-[120px] justify-self-center md:w-40 md:h-40 "></div>
            </div>
            <div className="flex gab-2">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p className="ml-2">Me agrada trabajar en equipo.</p>
            </div>
            <div className="flex gab-1">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p className="ml-2">Muchas ganas de seguir aprendiendo.</p>
            </div>
            <div className="flex gab-1 col-start-3 col-end-4">
              <div className="pointContainer">
                <div className="point" />
              </div>
              <p>Curiosa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
