import { motion } from 'framer-motion';

interface CarSpecsProps {
  modelYear?: string;
  fuelType?: string;
  topSpeed?: string;
  price?: string;
}

const specsData = [
  {
    label: 'Model Year',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    key: 'modelYear',
  },
  {
    label: 'Fuel Type',
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h8a2 2 0 002-2v-2M7 9V7a5 5 0 0110 0v2" /></svg>
    ),
    key: 'fuelType',
  },
  {
    label: 'Top Speed',
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v4h-1" /></svg>
    ),
    key: 'topSpeed',
  },
  {
    label: 'Price',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" /></svg>
    ),
    key: 'price',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 60 } },
};

export default function CarSpecs({ 
  modelYear = '2025',
  fuelType = 'Electric',
  topSpeed = '200 mph',
  price = '$50,000'
}: CarSpecsProps) {
  const specs = {
    modelYear,
    fuelType,
    topSpeed,
    price,
  };

  return (
    <motion.div
      className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-2xl p-4 sm:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* <h3 className="text-2xl font-bold text-[#232536] mb-6 text-center tracking-tight">Car Specifications</h3> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {specsData.map((spec, idx) => (
          <motion.div
            key={spec.key}
            className="flex items-center gap-3 sm:gap-4 bg-white/80 rounded-xl p-4 sm:p-5 shadow-md hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            {spec.icon}
            <div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">{spec.label}</div>
              <div className="text-base sm:text-lg font-semibold text-[#232536]">{specs[spec.key as keyof typeof specs]}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}