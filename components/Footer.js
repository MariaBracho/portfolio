import ContactIcon from "./ContactIcon";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex justify-center my-8">
        <div className="bg-violet_section rounded-xl flex flex-col w-56 h-24 justify-center">
          <div>
            <p className="text-white text-center text-xl font-medium">
              !Trabajemos juntos!{" "}
            </p>
          </div>
          <ContactIcon className="flex justify-around h-11 items-center" />
        </div>
      </div>
      <div className="flex justify-between p-5">
        <p>©2022</p>
        <p>Desarrollado con 🖤</p>
      </div>
    </footer>
  );
}
