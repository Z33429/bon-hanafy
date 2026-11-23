/** Responsive <img> from an `images.js` entry. */
export default function Img({ img, alt = '', sizes = '100vw', loading = 'lazy', className, fetchPriority, style }) {
  return (
    <img
      className={className}
      src={img.src}
      srcSet={img.srcSet}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      style={style}
    />
  );
}
