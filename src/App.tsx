import { motion } from 'framer-motion'

export default function App() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">

      <motion.img
        src="/logo.png"
        alt="MIMRAK Holdings Ltd"
        className="w-56 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-6xl font-bold text-dark tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Coming <span className="text-brand">Soon</span>
      </motion.h1>

      <motion.div
        className="w-12 h-1 bg-brand rounded-full mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      <motion.p
        className="text-gray-500 text-lg leading-relaxed max-w-md mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        We are building something exceptional.
        <br />
        Connecting global food supply chains across Africa —
        frozen fish, poultry, import &amp; export.
      </motion.p>

      <motion.div
        className="text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        In the meantime, reach us at{' '}
        <a
          href="mailto:Info@mimrackholdingsltd.com"
          className="text-brand font-semibold hover:underline"
        >
          Info@mimrackholdingsltd.com
        </a>
      </motion.div>

      <motion.div
        className="mt-14 text-xs tracking-widest uppercase text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Zambia &nbsp;·&nbsp; DRC &nbsp;·&nbsp; Nairobi
      </motion.div>

    </main>
  )
}
