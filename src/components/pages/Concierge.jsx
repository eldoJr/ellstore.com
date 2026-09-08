import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import PageWrapper from '../atoms/pageWrapper'
import Reveal      from '../atoms/reveal'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage
} from '../ui/breadcrumb'
import './Concierge.css'

const TOPICS = ['General Inquiry', 'Order Support', 'Wholesale', 'Press', 'Custom Order']

const Concierge = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageWrapper>
      <div className="concierge">

        {/* left — info */}
        <div className="concierge__left">
          <Reveal>
            <Breadcrumb className="concierge__breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Concierge</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="concierge__title">
              Let us know<br />how we can help
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="concierge__body">
              Whether you have a question about sizing, a custom order,
              or simply want to know more about the collection, we respond
              to every message personally.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="concierge__details">
              <div className="concierge__detail">
                <span className="type-label concierge__detail-label">Email</span>
                <a href="mailto:hello@ellstore.com" className="concierge__detail-value type-mono">
                  hello@ellstore.com
                </a>
              </div>
              <div className="concierge__detail">
                <span className="type-label concierge__detail-label">Response time</span>
                <span className="concierge__detail-value type-mono">Within 24 hours</span>
              </div>
              <div className="concierge__detail">
                <span className="type-label concierge__detail-label">Hours</span>
                <span className="concierge__detail-value type-mono">Mon to Fri, 9am to 6pm</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — form */}
        <Reveal delay={0.15} className="concierge__right">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="concierge__success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="concierge__success-icon" aria-hidden="true">✓</span>
                <h2 className="concierge__success-title">Message received</h2>
                <p className="concierge__success-body">
                  We will get back to you within 24 hours.
                </p>
                <button
                  className="concierge__submit type-mono"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', topic: TOPICS[0], message: '' }) }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="concierge__form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="concierge__row">
                  <div className="concierge__field">
                    <label className="concierge__label type-label" htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text"
                      className="concierge__input type-mono"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="concierge__field">
                    <label className="concierge__label type-label" htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email"
                      className="concierge__input type-mono"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="concierge__field">
                  <label className="concierge__label type-label" htmlFor="topic">Topic</label>
                  <select
                    id="topic" name="topic"
                    className="concierge__select type-mono"
                    value={form.topic}
                    onChange={handleChange}
                  >
                    {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="concierge__field">
                  <label className="concierge__label type-label" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message"
                    className="concierge__textarea type-mono"
                    placeholder="Tell us what you need..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="concierge__submit type-mono">
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

      </div>
    </PageWrapper>
  )
}

export default Concierge
