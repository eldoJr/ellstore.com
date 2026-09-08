import { motion } from 'motion/react'

const pillarItem = ({ index, title, body, img, delay = 0 }) => (
  <motion.div
    className="pillar-row"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* index */}
    <span className="pillar-row__index type-mono">{index}</span>

    {/* large display title */}
    <h3 className="pillar-row__title">{title}</h3>

    {/* right: body + image */}
    <div className="pillar-row__right">
      <p className="pillar-row__body">{body}</p>
      <div className="pillar-row__img-wrap">
        <motion.img
          src={img}
          alt={title}
          className="pillar-row__img"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  </motion.div>
)

export default pillarItem
