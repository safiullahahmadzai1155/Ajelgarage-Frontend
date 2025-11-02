import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const privacySections = [
    {
      icon: Users,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Vehicle information (Make, model, VIN, service history)",
        "Payment information (processed securely through payment processors)",
        "Technical data (IP address, browser type, pages visited)"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our automotive services",
        "To process your service appointments and payments",
        "To communicate with you about your vehicle and services",
        "To improve our services and customer experience",
        "To comply with legal obligations and regulations"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "Encryption of sensitive data during transmission",
        "Secure storage of customer information",
        "Regular security assessments and updates",
        "Limited access to personal information within our organization",
        "Compliance with Omani data protection regulations"
      ]
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to correct inaccurate data",
        "Right to request deletion of your data",
        "Right to object to processing of your data",
        "Right to data portability"
      ]
    },
    {
      icon: FileText,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Limited sharing with trusted service providers for vehicle services",
        "Disclosure when required by law or legal process",
        "Sharing with insurance companies for claim processing (with consent)"
      ]
    },
    {
      icon: Mail,
      title: "Contact & Updates",
      content: [
        "Regular review and updates to our privacy policy",
        "Notification of significant changes to our practices",
        "Contact our Data Protection Officer for privacy concerns",
        "Opt-out options for marketing communications"
      ]
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
          <div className="bg-stone-900 border border-amber-800 rounded-xl p-4 inline-block" >
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
              <Shield className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-amber-50 mb-4">Our Commitment to Your Privacy</h2>
          </div>
          
          <div className="space-y-4 text-amber-200 leading-relaxed">
            <p>
              At Ajal Garage, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p>
              We operate in compliance with the Sultanate of Oman's data protection regulations and international best practices 
              for data security. Your trust is our most valuable asset, and we take our responsibility to protect your information seriously.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </motion.div>

        {/* Main Privacy Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {privacySections.map((section, index) => {
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

        {/* Data Retention */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Data Retention Periods</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-amber-400 font-semibold mb-2">Service Records</h4>
                <p className="text-amber-200 text-sm">
                  We retain vehicle service history for 7 years to provide better service and maintain accurate maintenance records.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-orange-400 font-semibold mb-2">Financial Records</h4>
                <p className="text-amber-200 text-sm">
                  Payment and transaction records are kept for 10 years as required by Omani financial regulations.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-amber-400 font-semibold mb-2">Customer Communications</h4>
                <p className="text-amber-200 text-sm">
                  We retain customer service communications for 3 years to ensure quality service and resolve any future inquiries.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-orange-400 font-semibold mb-2">Marketing Data</h4>
                <p className="text-amber-200 text-sm">
                  Marketing preferences and consent records are maintained until you request their deletion or opt-out.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Contact Our Privacy Team</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-amber-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Data Protection Officer</h4>
              <p className="text-amber-300 text-sm mb-2">
                For privacy-related inquiries and data access requests
              </p>
              <a 
                href="mailto:privacy@ajalgarage.com" 
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                privacy@ajalgarage.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Policy Updates</h4>
              <p className="text-amber-300 text-sm mb-2">
                We regularly review and update our privacy practices
              </p>
              <p className="text-amber-400 text-sm">
                Check this page for the latest version
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legal Compliance */}
        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-50 mb-4">Legal Compliance</h3>
            <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
              Ajal Garage operates in full compliance with the Sultanate of Oman's data protection laws 
              and regulations. We are committed to maintaining the highest standards of data privacy and security.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-300">
              <span className="bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                Omani Data Protection Compliance
              </span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                International Security Standards
              </span>
              <span className="bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                Regular Security Audits
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm">
            This Privacy Policy is effective as of {lastUpdated} and may be updated from time to time.
          </p>
          <p className="text-amber-300 text-xs mt-2">
            © 2024 Ajal Garage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;