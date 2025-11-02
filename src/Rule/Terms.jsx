import React from 'react';
import { FileText, Scale, Shield, Car, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms = () => {
  const termsSections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: [
        "By using our services, you agree to these terms and conditions",
        "Services are provided on an 'as is' and 'as available' basis",
        "We reserve the right to modify or discontinue services at any time",
        "All vehicle services require prior authorization from the owner"
      ]
    },
    {
      icon: Car,
      title: "Vehicle Services",
      content: [
        "We provide automotive repair, maintenance, and diagnostic services",
        "Customers must provide accurate vehicle information and history",
        "Additional repairs may be recommended based on diagnostic results",
        "Used parts may be installed if requested and available"
      ]
    },
    {
      icon: Shield,
      title: "Warranty & Guarantees",
      content: [
        "12-month warranty on all repairs and replaced parts",
        "Warranty covers defects in workmanship and parts",
        "Warranty void if vehicle is serviced elsewhere during coverage period",
        "Original warranty documentation provided upon service completion"
      ]
    },
    {
      icon: Clock,
      title: "Appointments & Cancellations",
      content: [
        "Appointments can be scheduled online, by phone, or in-person",
        "24-hour notice required for appointment cancellations",
        "Late arrivals may result in rescheduling",
        "Emergency services available for priority situations"
      ]
    },
    {
      icon: AlertCircle,
      title: "Liability & Limitations",
      content: [
        "Maximum liability limited to the cost of services provided",
        "Not liable for pre-existing conditions or unrelated issues",
        "Customers must secure personal belongings from vehicles",
        "Test drives may be required for diagnostic purposes"
      ]
    },
    {
      icon: CheckCircle,
      title: "Payment Terms",
      content: [
        "Payment due upon completion of services",
        "We accept cash, credit cards, and bank transfers",
        "Deposit may be required for extensive repairs",
        "Payment plans available for major repairs (subject to approval)"
      ]
    }
  ];

  const importantPoints = [
    {
      icon: CheckCircle,
      text: "All estimates are provided before work begins",
      type: "success"
    },
    {
      icon: AlertCircle,
      text: "Additional charges may apply if hidden issues are discovered",
      type: "warning"
    },
    {
      icon: XCircle,
      text: "We are not responsible for vehicle theft or damage from external factors",
      type: "error"
    },
    {
      icon: Shield,
      text: "Insurance claims processing available for approved providers",
      type: "info"
    }
  ];

  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
     

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{marginTop:"10%"}}
        >
          <div className="bg-stone-900 border border-amber-800 rounded-xl p-4 inline-block">
            <p className="text-amber-400 text-sm">
              Last Updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-amber-50 mb-4">Terms of Service Agreement</h2>
          </div>
          
          <div className="space-y-4 text-amber-200 leading-relaxed">
            <p>
              Welcome to Ajal Garage. These Terms of Service govern your use of our automotive services, 
              including repairs, maintenance, diagnostics, and related services. Please read these terms carefully.
            </p>
            <p>
              By scheduling an appointment, dropping off your vehicle, or authorizing any work, you acknowledge 
              that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p>
              These terms are designed to protect both you and Ajal Garage, ensuring clear understanding 
              of our respective rights and responsibilities.
            </p>
          </div>
        </motion.div>

        {/* Important Points */}
        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Key Points to Remember</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {importantPoints.map((point, index) => {
              const Icon = point.icon;
              const colorClass = point.type === 'success' ? 'text-green-400 bg-green-500/20 border-green-500/30' :
                              point.type === 'warning' ? 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' :
                              point.type === 'error' ? 'text-red-400 bg-red-500/20 border-red-500/30' :
                              'text-amber-400 bg-amber-500/20 border-amber-500/30';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${colorClass}`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-amber-100 text-sm">{point.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Terms Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {termsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-900 border border-amber-800 rounded-xl p-6 hover:border-amber-600 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-50">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-amber-200 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Service Process */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Our Service Process</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Inspection", desc: "Comprehensive vehicle assessment" },
              { step: "2", title: "Estimate", desc: "Detailed cost breakdown provided" },
              { step: "3", title: "Approval", desc: "Customer authorization required" },
              { step: "4", title: "Service", desc: "Quality repairs and maintenance" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-500/30">
                  <span className="text-amber-400 font-bold">{process.step}</span>
                </div>
                <h4 className="text-amber-100 font-semibold mb-1">{process.title}</h4>
                <p className="text-amber-300 text-xs">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Support */}
             <motion.div 
            className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Questions & Support</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-amber-400" />
                </div>
                <h4 className="text-amber-100 font-semibold mb-2">Terms Clarification</h4>
                <p className="text-amber-300 text-sm mb-2">
                    Need help understanding our terms?
                </p>
                <a 
                    href="mailto:info@ajalgarage.com" 
                    className="text-amber-400 hover:text-amber-300 transition-colors text-sm"
                >
                    info@ajalgarage.com
                </a>
                </div>
                
                <div className="text-center">
                <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <h4 className="text-amber-100 font-semibold mb-2">Warranty Claims</h4>
                <p className="text-amber-300 text-sm mb-2">
                    Issues with warranty coverage?
                </p>
                <a 
                    href="mailto:warranty@ajalgarage.com" 
                    className="text-orange-400 hover:text-orange-300 transition-colors text-sm"
                >
                    warranty@ajalgarage.com
                </a>
                </div>
            </div>
            </motion.div>

        {/* Legal Footer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-800 rounded-2xl p-6 mb-6">
            <h4 className="text-amber-100 font-semibold mb-2">Legal Compliance</h4>
            <p className="text-amber-300 text-sm">
              Ajal Garage operates in compliance with Omani commercial laws and automotive service regulations.
            </p>
          </div>
          
          <p className="text-amber-400 text-sm">
            These Terms of Service are effective as of {lastUpdated} and may be updated periodically.
          </p>
          <p className="text-amber-300 text-xs mt-2">
            © 2024 Ajal Garage. All rights reserved. | Automotive Services License: OM-AG-2024
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;