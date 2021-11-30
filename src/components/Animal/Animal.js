import './Animal.css'
export default function Animal({ name, left, top, type, says }) {
  return (
    <div className="animal" style={{ top, left }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  )
}
