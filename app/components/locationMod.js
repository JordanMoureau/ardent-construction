import styles from "../styles/locationmod.module.css";

export default function LocationMod({
  location = "North Idaho",
  label = "Ardent Construction service area in North Idaho",
}) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    location,
  )}&output=embed`;

  return (
    <div className={styles.locationMod}>
      <iframe
        src={mapUrl}
        title={label}
        className={styles.map}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
