export default function About() {
  return (
    <div className="bg-[url('../public/assets/Images/background.svg')] flex justify-center  w-full h-[500px] bg-no-repeat bg-cover my-8  text-white px-5  py-12 text-sm md:px-11 md:bg-[url('../public/assets/Images/bg_md.svg')] md:h-[600px]">
      <a name="aboutme" />
      <div className="w-full md:w-4/5 mt-5 md:mt-11">
        <p className="text-2xl font-medium text-center">¿Por qué yo?</p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3  items-center h-80 w-full justify-center md:w-4/5 ">
            <div>Me desenvuelvo con tecnologías frontend..</div>
            <div>Creativa.</div>
            <div>Autodidacta</div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3 row-span-4 h-full flex items-end justify-center ">
              <div className="bg-[url('../public/assets/Images/human.svg')] w-[120px] bg-no-repeat  bg-contain h-[120px] justify-self-center md:w-40 md:h-40 "></div>
            </div>
            <div>
              Cuando tengo problemas trato de buscar una solución, en lugar de
              estresarme.
            </div>
            <div>Muchas ganas de seguir aprendiendo.</div>
            <div className="col-start-3 col-end-4">Curiosa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
