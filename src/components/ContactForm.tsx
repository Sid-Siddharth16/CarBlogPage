import { motion } from 'framer-motion';

type Props = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
};

export default function ContactForm({ label, name, type = 'text', value, onChange, error }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/80 backdrop-blur-lg p-4 sm:p-8 rounded-2xl border border-gray-100 max-w-md w-full mx-auto mb-6"
    >
      <label htmlFor={name} className="block text-xs sm:text-sm text-gray-600 mb-2 font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 shadow-sm min-h-[120px] resize-y"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 shadow-sm"
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </motion.div>
  );
}