// import { GoogleMap, widthScriptjs, widthGoogleMap } from "react-google-maps";

const Mapa = () => {
  return (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1691.377299009656!2d-71.52416537849358!3d-16.40560244257636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b01d40620df%3A0x5784bdb4e98b2967!2sEscuela%20Profesional%20de%20Ciencia%20de%20la%20Computaci%C3%B3n!5e0!3m2!1ses-419!2spe!4v1693170244925!5m2!1ses-419!2spe"
        className="w-full h-full rounded-[13px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
    ></iframe>
  );
};

export default Mapa;
