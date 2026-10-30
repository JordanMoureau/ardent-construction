import styles from "../styles/locationmod.module.css";

export default function LocationMod({
  label = "Ardent Construction Google Business Profile",
}) {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344364.9083949233!2d-116.99970575626506!3d47.96022462538662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1677d4989e21cbf%3A0xf1bea1453befc72e!2sArdent%20Construction!5e0!3m2!1sen!2sus!4v1793382561064!5m2!1sen!2sus";

  return (
    <div className={styles.footerMod}>
      <iframe
        src={mapUrl}
        title={label}
        className={styles.map}
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
